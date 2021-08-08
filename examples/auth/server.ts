import util from 'util'
import fs from 'fs'

import { Status as GrpcServerStatus } from '@grpc/grpc-js/build/src/constants'

import {
  grpc,
  IPuppetServer,
  PuppetService,
  DingResponse,
}                       from '../../src/mod'

import {
  puppetServerImpl,
}                     from '../../tests/puppet-server-impl'
import {
  StatusBuilder,
  Metadata,
  UntypedHandleCall,
}                     from '@grpc/grpc-js'
// import { Http2SecureServer } from 'http2'
import {
  sendUnaryData,
  ServerUnaryCall,
}                             from '@grpc/grpc-js/build/src/server-call'

import http2 from 'http2'

function monkeyPatchMetadataFromHttp2Headers (
  MetadataClass: typeof Metadata,
): void {
  const fromHttp2Headers = MetadataClass.fromHttp2Headers
  MetadataClass.fromHttp2Headers = function (
    headers: http2.IncomingHttpHeaders
  ): Metadata {
    const metadata = fromHttp2Headers.call(MetadataClass, headers)

    if (metadata.get('authorization').length <= 0) {
      const authority = headers[':authority']
      const authorization = `Wechaty ${authority}`
      metadata.set('authorization', authorization)
    }
    return metadata
  }
}

/**
 * The following handlers using `cb` for errors
 * handleUnaryCall
 * handleClientStreamingCall
 */
type ServiceHandlerCb = (call: ServerUnaryCall<any, any>, cb: sendUnaryData<any>) => void
/**
 * The following handlers using `emit` for errors
 * handleServerStreamingCall
 * handleBidiStreamingCall
 */
type ServiceHandlerEmit = (call: ServerUnaryCall<any, any>) => void
type ServiceHandler = ServiceHandlerCb | ServiceHandlerEmit

/**
 * Huan(202108): wrap the following handle calls with authorization:
 *  - handleUnaryCall
 *  - handleClientStreamingCall
 *  - handleServerStreamingCall
 *  - handleBidiStreamingCall
 */
function wrapAuthHandler (
  handler: UntypedHandleCall,
): ServiceHandler {
  console.info('wrapAuthHandler')
  return function (
    call: ServerUnaryCall<any, any>,
    cb?: sendUnaryData<any>,
  ) {
    // console.info('wrapAuthHandler internal')

    const authorization = call.metadata.get('authorization')[0]
    // console.info('authorization', authorization)
    if (typeof authorization === 'string') {
      const [wechaty, token] = authorization.split(/\s+/)
      if (wechaty === 'Wechaty' && token) {
        handler(
          call as any,
          cb as any,
        )
      }
    }

    /**
     * Not authorized
     */
    const error = new StatusBuilder()
      .withCode(GrpcServerStatus.UNAUTHENTICATED)
      .withDetails('The server need "Authorization: Wechaty TOKEN" to accept the request')
      .withMetadata(call.metadata)
      .build()

    if (cb) {
      cb(error)
    } else if ('emit' in call) {
      call.emit('error', error)
    } else {
      throw new Error('no callback and call is not emit-able')
    }
  }
}

function guardWechatyTokenAuthorization (
  puppetServer: IPuppetServer,
): IPuppetServer {
  for (const [key, val] of Object.entries(puppetServer)) {
    puppetServer[key] = wrapAuthHandler(val)
  }
  return puppetServer
}

monkeyPatchMetadataFromHttp2Headers(Metadata)

const puppetServerExample: IPuppetServer = {
  ...puppetServerImpl,

  ding: (call, callback) => {
    const data = call.request.getData()
    console.info(`ding(${data})`)
    console.info('authorization:', call.metadata.getMap()['authorization'])
    // console.info('getPeer:', call.getPeer())
    // console.info('getDeadLine:', call.getDeadline())

    // void server
    // console.info('server', (server as any))

    const error = new StatusBuilder()
      .withCode(GrpcServerStatus.UNAUTHENTICATED)
      .withDetails('The server need "Authorization: Wechaty TOKEN" to accept the request')
      .withMetadata(call.metadata)
      .build()

    void error
    callback(null, new DingResponse())

    // console.info('getDeadLine:', call.)
    // callback(error, new DingResponse())
  },
}

async function main () {
  const server = new grpc.Server()
  server.addService(
    PuppetService,
    guardWechatyTokenAuthorization(puppetServerExample),
  )

  const serverBindPromise = util.promisify(
    server.bindAsync.bind(server)
  )

  void fs

  const rootCerts: null | Buffer = fs.readFileSync('root-ca.crt')
  const keyCertPairs: grpc.KeyCertPair[] = [{
    cert_chain  : fs.readFileSync('server.crt'),
    private_key : fs.readFileSync('server.key'),
  }]
  const checkClientCertificate = false

  const port = await serverBindPromise(
    '127.0.0.1:8788',
    // grpc.ServerCredentials.createInsecure(),
    grpc.ServerCredentials.createSsl(rootCerts, keyCertPairs, checkClientCertificate),

  )
  console.info('Listen on port:', port)
  server.start()
  return 0
}

main()
  .catch(console.error)
