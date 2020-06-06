"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.destinationPath = void 0;

var _webpack = _interopRequireDefault(require("webpack"));

var _webpackBabelConf = _interopRequireDefault(require("./webpackBabelConf"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _defaultConfig = _interopRequireDefault(require("../defaultConfig"));

var _entry;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_dotenv.default.config();

var mainJsFileName = 'app';
var dest = process.env.DEST || _defaultConfig.default.DEST;
var destScripts = process.env.DEST_SCRIPTS || _defaultConfig.default.DEST_SCRIPTS;
var scriptsFolder = process.env.SCRIPTS_FOLDER || _defaultConfig.default.SCRIPTS_FOLDER;
var destinationPath = process.cwd() + '/' + dest + '/' + destScripts;
exports.destinationPath = destinationPath;
var config = {
  mode: 'development',
  entry: (_entry = {}, _defineProperty(_entry, mainJsFileName, "./".concat(scriptsFolder, "/index.js")), _defineProperty(_entry, "otherEntry", "./".concat(scriptsFolder, "/otherEntry.ts")), _entry),
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
    rules: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: _webpackBabelConf.default
      }, 'ts-loader']
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: _webpackBabelConf.default
      }]
    }, {
      test: /\.css$/,
      loaders: ['css-loader']
    }, {
      test: /\.scss$/,
      use: ['css-loader', 'sass-loader']
    }]
  },
  plugins: [new _webpack.default.SourceMapDevToolPlugin({
    filename: '[name].js.map',
    exclude: ['vendor.js']
  })]
};
exports.config = config;