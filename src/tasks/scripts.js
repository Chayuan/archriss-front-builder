import webpack from 'webpack'
import rimraf from 'rimraf'
import dotenv from 'dotenv'
import logger from '../utils/nodeLogger'
import { config, destinationPath } from '../webpack/webpack.config.dev.js'

dotenv.config()

export async function scripts() {
  try {
    logger.log('SCRIPTS')

    if(!process.env.DEST) logger.warn().log('Missing env variable : DEST')
    if(!process.env.DEST_SCRIPTS) logger.warn().log('Missing env variable : DEST_SCRIPTS')
    if(!process.env.SCRIPTS_FOLDER) logger.warn().log('Missing env variable : SCRIPTS_FOLDER')

    await cleanOldScripts()
    await runWebpack()
  } catch (e) {
    logger.error(e.message)
  }
}

function cleanOldScripts() {
  return new Promise((resolve, reject) => {
    try {
      // clean old script folder
      rimraf(destinationPath, () => {
        logger.startLoading('cleaning old scripts folder')
        logger.stopLoading('cleaning old scripts folder', 'success')
      })
      resolve()
    } catch (e) {
      reject('Error cleaning old scripts folder')
    }
  })
}

async function runWebpack() {

  return new Promise((resolve, reject) => {
    try {
      const compiler = webpack(config)
      compiler.run((err, stats) => {
        if (err) {
          logger.startLoading('')
          logger.stopLoading('Webpack error', 'error')
          reject(err)
        } else {
          logger.startLoading('')
          logger.stopLoading('scripts', 'success')
          resolve()
        }
      })
    } catch (e) {
      logger.stopLoading('scripts', 'error')
      reject(e)
    }
  })

}

