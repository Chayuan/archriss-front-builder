"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.destinationPath = void 0;

var _uglifyjsWebpackPlugin = _interopRequireDefault(require("uglifyjs-webpack-plugin"));

var _miniCssExtractPlugin = _interopRequireDefault(require("mini-css-extract-plugin"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _defaultConfig = _interopRequireDefault(require("../defaultConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_dotenv.default.config();

var destScripts = process.env.DEST_SCRIPTS || _defaultConfig.default.DEST_SCRIPTS;
var scriptsFolder = process.env.SCRIPTS_FOLDER || _defaultConfig.default.SCRIPTS_FOLDER;

var entryPoints = (process.env.SCRIPTS_ENTRY_POINTS || _defaultConfig.default.SCRIPTS_ENTRY_POINTS).split(' ');

var destinationPath = process.cwd() + '/' + destScripts;
exports.destinationPath = destinationPath;
var config = {
  mode: 'production',
  entry: _objectSpread({}, entryPoints.reduce(function (acc, value) {
    var splitName = value.split('.');
    var key = "".concat(splitName.slice(0, splitName.length - 1).join(''));
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, "./".concat(scriptsFolder, "/").concat(value)));
  }, {})),
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