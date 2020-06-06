"use strict";

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scripts = scripts;

require("regenerator-runtime/runtime");

var _webpack = _interopRequireDefault(require("webpack"));

var _rimraf = _interopRequireDefault(require("rimraf"));

var _nodeLogger = _interopRequireDefault(require("../utils/nodeLogger"));

var _webpackConfigDev = require("../webpack/webpack.config.dev.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function scripts() {
  return _scripts.apply(this, arguments);
}

function _scripts() {
  _scripts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            _nodeLogger.default.log('SCRIPTS');

            _context.next = 4;
            return cleanOldScripts();

          case 4:
            _context.next = 6;
            return runWebpack();

          case 6:
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);

            _nodeLogger.default.error(_context.t0.message);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _scripts.apply(this, arguments);
}

function cleanOldScripts() {
  return new Promise(function (resolve, reject) {
    try {
      // clean old script folder
      (0, _rimraf.default)(_webpackConfigDev.destinationPath, function () {
        _nodeLogger.default.startLoading('cleaning old scripts folder');

        _nodeLogger.default.stopLoading('cleaning old scripts folder', 'success');
      });
      resolve();
    } catch (e) {
      reject('Error cleaning old scripts folder');
    }
  });
}

function runWebpack() {
  return _runWebpack.apply(this, arguments);
}

function _runWebpack() {
  _runWebpack = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              try {
                var compiler = (0, _webpack.default)(_webpackConfigDev.config);
                compiler.run(function (err, stats) {
                  if (err) {
                    _nodeLogger.default.startLoading('');

                    _nodeLogger.default.stopLoading('Webpack error', 'error');

                    reject(err);
                  } else {
                    _nodeLogger.default.startLoading('');

                    _nodeLogger.default.stopLoading('scripts', 'success');

                    resolve();
                  }
                });
              } catch (e) {
                _nodeLogger.default.stopLoading('scripts', 'error');

                reject(e);
              }
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _runWebpack.apply(this, arguments);
}