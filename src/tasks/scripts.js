import webpack from 'webpack'
import rimraf from 'rimraf'
import dotenv from 'dotenv'
import * as webpackDev from '../webpack/webpack.config.dev.js'
import * as webpackProd from '../webpack/webpack.config.prod.js'
import defaultConfig from '../defaultConfig'

dotenv.config()

export async function scripts(isProd = false) {
  try {
    console.log(`\n\x1b[1mSCRIPTS-${isProd ? 'PROD' : 'DEV'}\x1b[0m`)

    if (!process.env.DEST_SCRIPTS) {
      console.log(' \x1b[33mWarning\x1b[0m', 'missing env variable : DEST_SCRIPTS')
      console.log(` └─ defaulting to ${defaultConfig.DEST_SCRIPTS}`)
    }
    if (!process.env.SCRIPTS_FOLDER) {
      console.log(' \x1b[33mWarning\x1b[0m', 'missing env variable : SCRIPTS_FOLDER')
      console.log(` └─ defaulting to ${defaultConfig.SCRIPTS_FOLDER}`)
    }
    if (!process.env.SCRIPTS_ENTRY_POINTS) {
      console.log(' \x1b[33mWarning\x1b[0m', 'missing env variable : SCRIPTS_ENTRY_POINTS')
      console.log(` └─ defaulting to ${defaultConfig.SCRIPTS_ENTRY_POINTS}`)
    }

    await cleanOldScripts(isProd)
    await runWebpack(isProd)
  } catch (e) {
    console.log(' \x1b[31mError\x1b[0m ', 'scripts task failed')
    console.log(' \x1b[31mError\x1b[0m ', e)
  }
}

function cleanOldScripts(isProd = false) {
  return new Promise((resolve, reject) => {
    try {
      // clean old script folder
      rimraf(isProd ? webpackProd.destinationPath : webpackDev.destinationPath, () => {
      })
      resolve()
    } catch (e) {
      reject('cannot delete script folder')
    }
  })
}

async function runWebpack(isProd = false) {
  return new Promise((resolve, reject) => {
    try {
      const compiler = webpack(isProd ? webpackProd.config : webpackDev.config)
      compiler.run((err, stats) => {
        if (err) {
          console.log(' \x1b[31mError\x1b[0m ', 'webpack error')
          reject(err)
        } else {
          console.log(' \x1b[32mSuccess\x1b[0m', 'scripts')
          resolve()
        }
      })
    } catch (e) {
      reject(e)
    }
  })

}

