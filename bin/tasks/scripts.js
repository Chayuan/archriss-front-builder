"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

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
            console.log('\n\x1b[1mSCRIPTS\x1b[0m');

            if (!process.env.DEST) {
              console.log(' \x1b[33mWarning\x1b[0m', 'missing env variable : DEST');
              console.log(" \u2514\u2500 defaulting to ".concat(_defaultConfig.default.DEST));
            }

            if (!process.env.DEST_SCRIPTS) {
              console.log(' \x1b[33mWarning\x1b[0m', 'missing env variable : DEST_SCRIPTS');
              console.log(" \u2514\u2500 defaulting to ".concat(_defaultConfig.default.DEST_SCRIPTS));
            }

            if (!process.env.SCRIPTS_FOLDER) {
              console.log(' \x1b[33mWarning\x1b[0m', 'missing env variable : SCRIPTS_FOLDER');
              console.log(" \u2514\u2500 defaulting to ".concat(_defaultConfig.default.SCRIPTS_FOLDER));
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
                var compiler = (0, _webpack.default)(isProd ? webpackProd.config : webpackDev.config);
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