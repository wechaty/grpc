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
}                     from '@grpc/grpc-js'
// import { Http2SecureServer } from 'http2'

import http2 from 'http2'

const origFunc = Metadata.fromHttp2Headers
Metadata.fromHttp2Headers = function (headers: http2.IncomingHttpHeaders): Metadata {
  const metadata = origFunc.call(Metadata, headers)
  console.info('metadata.get', metadata.get('authorization'))
  const authorizationList = metadata.get('authorization')
  if (authorizationList.length <= 0) {
    Object.keys(headers).forEach((key) => {
      if (key === ':authority') {
        const authority = headers[key]
        const authorization = `Wechaty ${authority}`
        metadata.set('authorization', authorization)
      }
    })
  }
  return metadata
}

const puppetServerExample: (server: grpc.Server) => IPuppetServer = server => ({
  ...puppetServerImpl,

  ding: (call, callback) => {
    // const data = call.request.getData()
    // console.info(`ding(${data})`)
    console.info('metadata:', call.metadata.getMap())
    // console.info('getPeer:', call.getPeer())
    // console.info('getDeadLine:', call.getDeadline())

    void server
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
})

async function main () {
  const server = new grpc.Server()
  server.addService(
    PuppetService,
    puppetServerExample(server),
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
