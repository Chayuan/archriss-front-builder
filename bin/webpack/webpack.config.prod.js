"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.destinationPath = void 0;

var _uglifyjsWebpackPlugin = _interopRequireDefault(require("uglifyjs-webpack-plugin"));

var _miniCssExtractPlugin = _interopRequireDefault(require("mini-css-extract-plugin"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _defaultConfig = _interopRequireDefault(require("../defaultConfig"));

var _entry;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mainJsFileName = 'app';

_dotenv.default.config();

var dest = process.env.DEST || _defaultConfig.default.DEST;
var destScripts = process.env.DEST_SCRIPTS || _defaultConfig.default.DEST_SCRIPTS;
var scriptsFolder = process.env.SCRIPTS_FOLDER || _defaultConfig.default.SCRIPTS_FOLDER;
var destinationPath = process.cwd() + '/' + dest + '/' + destScripts;
exports.destinationPath = destinationPath;
var config = {
  mode: 'production',
  entry: (_entry = {}, _defineProperty(_entry, mainJsFileName, "./".concat(scriptsFolder, "/index.js")), _defineProperty(_entry, "otherEntry", "./".concat(scriptsFolder, "/otherEntry.ts")), _entry),
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
exports.config = config;