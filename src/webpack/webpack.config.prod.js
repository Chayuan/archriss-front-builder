import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import dotenv from 'dotenv'
import defaultConfig from '../defaultConfig'

const mainJsFileName = 'app'

dotenv.config()

const dest =  (process.env.DEST || defaultConfig.DEST)
const destScripts = (process.env.DEST_SCRIPTS || defaultConfig.DEST_SCRIPTS)
const scriptsFolder = (process.env.SCRIPTS_FOLDER || defaultConfig.SCRIPTS_FOLDER)
export const destinationPath = process.cwd() + '/' + dest + '/' + destScripts

export const config = {
  mode: 'production',
  entry: {
    [mainJsFileName]: `./${scriptsFolder}/index.js`,
    otherEntry: `./${scriptsFolder}/otherEntry.ts`
  },
  output: {
    filename: '[name].js',
    path: destinationPath
  },
  /* Uglify JS in production */
  resolve: {
    mainFiles: ['index'],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['css-loader', 'sass-loader']
      }
    ]
  }
}
