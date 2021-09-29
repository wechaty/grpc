#!/usr/bin/env bash

set -eo pipefail

PROTO_BASE_DIR=../proto
PROTO_PUPPET_DIR=$PROTO_BASE_DIR/wechaty/puppet
PROTO_WECHATY_DIR=$PROTO_BASE_DIR/wechaty

# /usr/local/include

OUT_WECHATY_DIR=./generated/wechaty
OUT_PUPPET_DIR=$OUT_WECHATY_DIR

if [ ! -d "$PUPPET_GEN_DIR" ]; then
  mkdir -p $OUT_PUPPET_DIR
fi

protoc --version

protoc \
  -I $PROTO_BASE_DIR \
  --plugin=protoc-gen-grpc-java=/usr/local/bin/protoc-gen-grpc-java-1.37.1-linux-x86_64.exe \
  --grpc-java_out="$OUT_PUPPET_DIR" $PROTO_PUPPET_DIR/*.proto

protoc \
  -I $PROTO_BASE_DIR \
  --plugin=protoc-gen-grpc-java=/usr/local/bin/protoc-gen-grpc-java-1.37.1-linux-x86_64.exe \
  --grpc-java_out="$OUT_PUPPET_DIR" $PROTO_WECHATY_DIR/*.proto
