import path from 'path'
import fs from 'fs'

import { ApiStore } from './config.js'

import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

function getOpenApiPath (...paths: string[]): string {
  return path.join(
    __dirname,
    '..',
    'generated',
    ...paths,
  )
}

const puppetSwaggerFile = getOpenApiPath(
  'wechaty',
  'puppet.swagger.json',
)

const puppet: ApiStore = {
  v0: {
    data: fs.readFileSync(puppetSwaggerFile, 'utf-8'),
    file: puppetSwaggerFile,
  },
}

export {
  puppet,
}
