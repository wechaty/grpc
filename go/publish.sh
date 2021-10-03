#!/usr/bin/env bash

set -eo pipefail

OUT_DIR="$(pwd)/out"

VERSION=$(jq -r .version ../package.json)
DEPLOY_DIR="wechaty-go-grpc.$$"

mkdir "$DEPLOY_DIR"
pushd "$DEPLOY_DIR"
# trap "rm -rfv $(pwd)/$DEPLOY_DIR" EXIT

git clone git@github.com:wechaty/go-grpc.git
cd go-grpc
cp -Rav "$OUT_DIR"/wechaty .
echo "$VERSION" > VERSION

# build test
go build -v wechaty/puppet.pb.go

if [ -z "$(git status --porcelain)" ]; then
  echo
  echo "[Publish] There's no new generated code found"
  echo
  exit 0
fi

git add .

git \
  -c "user.name=Mike BO" \
  -c "user.email=mike@zixia.net" \
  \
  commit \
  -am "Deploy Go Grpc Module v${VERSION}"

git push
echo
echo '[Publish] New code has been generated and pushed'
echo

git tag v"$VERSION"
git push origin v"$VERSION"
echo
echo "[Publish] New version ${VERSION} has been tagged"
echo

git status
popd
