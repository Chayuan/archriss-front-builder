import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import dotenv from 'dotenv'
import defaultConfig from '../defaultConfig'

dotenv.config()

const dest =  (process.env.DEST || defaultConfig.DEST)
const destScripts = (process.env.DEST_SCRIPTS || defaultConfig.DEST_SCRIPTS)
const scriptsFolder = (process.env.SCRIPTS_FOLDER || defaultConfig.SCRIPTS_FOLDER)
const entryPoints = (process.env.SCRIPTS_ENTRY_POINTS || defaultConfig.SCRIPTS_ENTRY_POINTS).split(' ')

export const destinationPath = process.cwd() + '/' + dest + '/' + destScripts

export const config = {
  mode: 'production',
  entry:  {
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
