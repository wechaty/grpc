import wrappers from 'google-protobuf/google/protobuf/wrappers_pb.js'

import * as grpc  from '@grpc/grpc-js'
import * as proto from './proto.js'
import * as openApi from './openapi.js'
import {
  VERSION,
}           from './config.js'

const {
  StringValue,
}               = wrappers

export {
  grpc,
  proto,
  openApi,
  VERSION,
  StringValue,
}
export * from './generated.js'
