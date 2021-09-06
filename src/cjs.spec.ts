#!/usr/bin/env -S node --no-warnings --loader ts-node/esm

import { test } from 'tstest'

import {
  codeRoot,
  puppet,
}                 from './cjs.js'

test('ESM: codeRoot', async t => {
  t.ok(codeRoot, 'should exists "codeRoot"')
})

test('ESM: puppet', async t => {
  t.ok(puppet, 'should exists "puppet"')
  t.ok(puppet.EventRequest, 'should exists "EventRequest"')
})

test('ESM: puppet.EventTypeMap', async t => {
  const map: puppet.EventTypeMap = {} as any
  map.EVENT_TYPE_DIRTY = puppet.EventType.EVENT_TYPE_DIRTY
  t.equal(Object.keys(map).length, 1, 'should export type "EventTypeMap"')
})

test('ESM: puppet', async t => {
  t.ok(puppet.DingRequest, 'should exists "DingRequest"')
  console.info(typeof puppet.DingRequest)
})
