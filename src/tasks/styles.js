import { styles as gulpStyles } from '../gulpfile.babel'
import dotenv from 'dotenv'
import defaultConfig from '../defaultConfig'

dotenv.config()


export async function styles(isProd = false) {
  try {
    console.log(`\n\x1b[1mSTYLES-${isProd ? 'PROD' : 'DEV'}\x1b[0m`)

    if (!process.env.DEST) {
      console.log('\x1b[33mWarning\x1b[0m', 'missing env variable : DEST')
      console.log(`└─ defaulting to ${defaultConfig.DEST}`)
    }
    if (!process.env.DEST_STYLES) {
      console.log('\x1b[33mWarning\x1b[0m', 'missing env variable : DEST_STYLES')
      console.log(`└─ defaulting to ${defaultConfig.DEST_STYLES}`)
    }
    if (!process.env.STYLES_FOLDER) {
      console.log('\x1b[33mWarning\x1b[0m', 'missing env variable : STYLES_FOLDER')
      console.log(`└─ defaulting to ${defaultConfig.STYLES_FOLDER}`)
    }

    await compileScss(isProd)
  } catch (e) {
    console.log(' \x1b[31mError\x1b[0m ', 'styles task failed')
    console.log(' \x1b[31mError\x1b[0m ', e)
  }
}


async function compileScss(isProd = false) {
  return new Promise((resolve, reject) => {
    try {
      gulpStyles(isProd)
      console.log(' \x1b[32mSuccess\x1b[0m', 'styles')
      resolve()
    } catch (e) {
      reject(e)
    }
  })
}


