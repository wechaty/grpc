#!/usr/bin/env -S node --no-warnings --loader ts-node/esm

import { test } from 'tstest'

import {
  grpc,
  IPuppetServer,
  PuppetService,
}                   from './mod.js'

test('`grpc` is exported', async t => {
  t.ok(grpc, 'should imported grpc')
})

test('`IPuppetServer` is exported', async t => {
  const i: IPuppetServer = {} as any
  t.ok(i, 'should has typing IPuppetServer')
})

test('`PuppetService` is exported', async t => {
  t.ok(PuppetService, 'should export PuppetSevice')
})
