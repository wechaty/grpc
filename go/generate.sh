#!/usr/bin/env bash

set -eo pipefail

# Huan(202110): enable `**/*.proto` to include all files
# https://stackoverflow.com/a/28199633/1123955
shopt -s globstar

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

PROTO_BASE_DIR=$ROOT/proto
OUT_DIR=$ROOT/go/generated

if [ ! -d "$OUT_DIR" ]; then
  mkdir -p $OUT_DIR
fi

protoc --version

protoc \
  -I $PROTO_BASE_DIR \
  -I $ROOT/third-party \
  --go_out=$OUT_DIR \
  --go_opt=paths=source_relative \
  --go-grpc_out=$OUT_DIR \
  --go-grpc_opt=paths=source_relative \
  "$PROTO_BASE_DIR"/wechaty/**/*.proto \
  "$ROOT"/third-party/**/*.proto
