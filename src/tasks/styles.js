import logger from '../utils/nodeLogger'
import { styles as gulpStyles } from '../gulpfile.babel'
import dotenv from 'dotenv'
import defaultConfig from '../defaultConfig'
dotenv.config()


export async function styles() {
  try {
    logger.log('STYLES')

    if(!process.env.DEST) logger.warn().log('Missing env variable : DEST').log(`└─ defaulting to ${defaultConfig.DEST}`).log()
    if(!process.env.DEST_STYLES) logger.warn().log('Missing env variable : DEST_STYLES').log(`└─ defaulting to ${defaultConfig.DEST_STYLES}`).log()
    if(!process.env.STYLES_FOLDER) logger.warn().log('Missing env variable : STYLES_FOLDER').log(`└─ defaulting to ${defaultConfig.STYLES_FOLDER}`).log()

    await compileScss()
  } catch (e) {
    logger.error(e.message)
  }
}


async function compileScss() {
  return new Promise((resolve, reject) => {
    try {
      console.log(gulpStyles)
      logger.startLoading('Styles : Compiling....')
      gulpStyles()
      logger.stopLoading('Styles', 'success')
      resolve()
    } catch (e) {
      logger.stopLoading('Styles', 'error')
      reject(e)
    }
  })
}


