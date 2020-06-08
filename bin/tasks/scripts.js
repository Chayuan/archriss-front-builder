"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scripts = scripts;

require("regenerator-runtime/runtime");

var _webpack = _interopRequireDefault(require("webpack"));

var _rimraf = _interopRequireDefault(require("rimraf"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var webpackDev = _interopRequireWildcard(require("../webpack/webpack.config.dev.js"));

var webpackProd = _interopRequireWildcard(require("../webpack/webpack.config.prod.js"));

var _defaultConfig = _interopRequireDefault(require("../defaultConfig"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv.default.config();

function scripts() {
  return _scripts.apply(this, arguments);
}

function _scripts() {
  _scripts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var isProd,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            isProd = _args.length > 0 && _args[0] !== undefined ? _args[0] : false;
            _context.prev = 1;
            console.log("\n\x1B[1mSCRIPTS-".concat(isProd ? 'PROD' : 'DEV', "\x1B[0m"));

            if (!process.env.DEST_SCRIPTS) {
              console.log(' \x1b[33mWarning\x1b[0m', 'missing env variable : DEST_SCRIPTS');
              console.log(" \u2514\u2500 defaulting to ".concat(_defaultConfig.default.DEST_SCRIPTS));
            }

            if (!process.env.SCRIPTS_FOLDER) {
              console.log(' \x1b[33mWarning\x1b[0m', 'missing env variable : SCRIPTS_FOLDER');
              console.log(" \u2514\u2500 defaulting to ".concat(_defaultConfig.default.SCRIPTS_FOLDER));
            }

            if (!process.env.SCRIPTS_ENTRY_POINTS) {
              console.log(' \x1b[33mWarning\x1b[0m', 'missing env variable : SCRIPTS_ENTRY_POINTS');
              console.log(" \u2514\u2500 defaulting to ".concat(_defaultConfig.default.SCRIPTS_ENTRY_POINTS));
            }

            _context.next = 8;
            return cleanOldScripts(isProd);

          case 8:
            _context.next = 10;
            return runWebpack(isProd);

          case 10:
            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            console.log(' \x1b[31mError\x1b[0m ', 'scripts task failed');
            console.log(' \x1b[31mError\x1b[0m ', _context.t0);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 12]]);
  }));
  return _scripts.apply(this, arguments);
}

function cleanOldScripts() {
  var isProd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return new Promise(function (resolve, reject) {
    try {
      // clean old script folder
      (0, _rimraf.default)(isProd ? webpackProd.destinationPath : webpackDev.destinationPath, function () {});
      resolve();
    } catch (e) {
      reject('cannot delete script folder');
    }
  });
}

function runWebpack() {
  return _runWebpack.apply(this, arguments);
}

function _runWebpack() {
  _runWebpack = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var isProd,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            isProd = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : false;
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              try {
                var userConfig = {};

                if (process.env.WEBPACK_CUSTOM_CONFIG_FILE) {
                  try {
                    userConfig = require(process.cwd() + '/' + process.env.WEBPACK_CUSTOM_CONFIG_FILE);
                    console.log(' Info', 'using custom webpack configuration');
                  } catch (e) {
                    console.log(' \x1b[33mWarning\x1b[0m', "no webpack config found in path ".concat(process.env.WEBPACK_CUSTOM_CONFIG_FILE));
                    console.log(" \u2514\u2500 using default");
                  }
                }

                var boilerplateConfig = isProd ? webpackProd.config : webpackDev.config;
                var compiler = (0, _webpack.default)(_objectSpread(_objectSpread({}, boilerplateConfig), userConfig));
                compiler.run(function (err, stats) {
                  if (err) {
                    console.log(' \x1b[31mError\x1b[0m ', 'webpack error');
                    reject(err);
                  } else {
                    console.log(' \x1b[32mSuccess\x1b[0m', 'scripts');
                    resolve();
                  }
                });
              } catch (e) {
                reject(e);
              }
            }));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _runWebpack.apply(this, arguments);
}