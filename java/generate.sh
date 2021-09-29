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

protoc --plugin=protoc-gen-grpc-java \
  --grpc-java_out="$OUT_PUPPET_DIR" --proto_path="$PROTO_WECHATY_DIR" "*.proto"
