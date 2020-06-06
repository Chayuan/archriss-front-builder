#!/usr/bin/env node
import { scripts } from './tasks/scripts'
import { styles } from './tasks/styles'

async function run() {
  await scripts(true)
  await styles(true)
}

run()
