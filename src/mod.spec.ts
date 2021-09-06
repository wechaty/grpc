#!/usr/bin/env -S node --no-warnings --loader ts-node/esm

import { test } from 'tstest'

import {
  grpc,
  puppet,
}                   from './mod.js'

test('`grpc` is exported', async t => {
  t.ok(grpc, 'should imported grpc')
})

test('`IPuppetServer` is exported', async t => {
  const i: puppet.IPuppetServer = {} as any
  t.ok(i, 'should has typing IPuppetServer')
})

test('`PuppetService` is exported', async t => {
  t.ok(puppet.PuppetService, 'should export PuppetSevice')
})
