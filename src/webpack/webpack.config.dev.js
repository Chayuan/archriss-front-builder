import webpack from 'webpack'
import webpackBabelConf from './webpackBabelConf'
import dotenv from 'dotenv'
import defaultConfig from '../defaultConfig'

dotenv.config()
const mainJsFileName = 'app'

const dest =  (process.env.DEST || defaultConfig.DEST)
const destScripts = (process.env.DEST_SCRIPTS || defaultConfig.DEST_SCRIPTS)
export const destinationPath = process.cwd() + '/' + dest + '/' + destScripts

export const config = {
  mode: 'development',
  entry: {
    [mainJsFileName]: `./${destScripts}/index.js`,
    otherEntry: `./${destScripts}/otherEntry.ts`
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
