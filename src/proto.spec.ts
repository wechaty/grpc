#!/usr/bin/env ts-node

import { test } from 'tstest'

import {
  puppet,
}                 from './proto.js'

test('puppet.v0.file', async t => {
  const EXPECTED_PATH_REG = /puppet\.proto$/
  t.true(EXPECTED_PATH_REG.test(puppet.v0.file), 'puppet proto file should be puppet.proto')
})

test('puppet.v0.data', async t => {
  t.true(puppet.v0.data.length > 0, 'should get proto data for puppet.v0.data')
})
