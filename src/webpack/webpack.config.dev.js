import webpack from 'webpack'
import webpackBabelConf from './webpackBabelConf'
import dotenv from 'dotenv'
import logger from '../utils/nodeLogger'

dotenv.config()
const mainJsFileName = 'app'

export const destinationPath = process.cwd() + '/' + process.env.DEST + '/' + process.env.DEST_SCRIPTS

export const config = {
  mode: 'development',
  entry: {
    [mainJsFileName]: `./${process.env.SCRIPTS_FOLDER}/index.js`,
    otherEntry: `./${process.env.SCRIPTS_FOLDER}/otherEntry.ts`
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
