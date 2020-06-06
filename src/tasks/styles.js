import logger from '../utils/nodeLogger'
import { styles as gulpStyles } from '../gulpfile.babel'


export async function styles() {
  try {
    logger.log('STYLES')
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


