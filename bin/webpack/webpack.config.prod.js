"use strict";

var _uglifyjsWebpackPlugin = _interopRequireDefault(require("uglifyjs-webpack-plugin"));

var _miniCssExtractPlugin = _interopRequireDefault(require("mini-css-extract-plugin"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _entry;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mainJsFileName = 'app';

_dotenv.default.config();

var destinationPath = process.cwd() + '/' + process.env.DEST + '/' + process.env.DEST_SCRIPTS;
module.exports = {
  mode: 'production',
  entry: (_entry = {}, _defineProperty(_entry, mainJsFileName, "./".concat(process.env.SCRIPTS_FOLDER, "/index.js")), _defineProperty(_entry, "otherEntry", "./".concat(process.env.SCRIPTS_FOLDER, "/otherEntry.ts")), _entry),
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
    minimizer: [new _uglifyjsWebpackPlugin.default()]
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'ts-loader']
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      use: [_miniCssExtractPlugin.default.loader, 'css-loader']
    }, {
      test: /\.scss$/,
      use: ['css-loader', 'sass-loader']
    }]
  }
};