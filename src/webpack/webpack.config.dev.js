import webpack from 'webpack'
import webpackBabelConf from './webpackBabelConf'
import dotenv from 'dotenv'
import defaultConfig from '../defaultConfig'

dotenv.config()

const dest = (process.env.DEST || defaultConfig.DEST)
const destScripts = (process.env.DEST_SCRIPTS || defaultConfig.DEST_SCRIPTS)
const scriptsFolder = (process.env.SCRIPTS_FOLDER || defaultConfig.SCRIPTS_FOLDER)
const entryPoints = (process.env.SCRIPTS_ENTRY_POINTS || defaultConfig.SCRIPTS_ENTRY_POINTS).split(' ')

export const destinationPath = process.cwd() + '/' + dest + '/' + destScripts

export const config = {
  mode: 'development',
  entry: {
    ...entryPoints.reduce((acc, value) => {
      const splittedName = value.split('.')
      const key = `${splittedName.slice(0, splittedName.length - 1).join('')}`
      return {
        ...acc,
        [key]: `./${scriptsFolder}/${value}`
      }
    }, {})
  },
  output: {
    filename: '[name].js',
    path: destinationPath
  },
  devtool: false,
  resolve: {
    mainFiles: ['index'],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader', options: webpackBabelConf
        }, 'ts-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader', options: webpackBabelConf
        }]
      },
      {
        test: /\.css$/,
        loaders: ['css-loader']
      },
      {
        test: /\.scss$/,
        use: ['css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['vendor.js']
    })
  ]
}
