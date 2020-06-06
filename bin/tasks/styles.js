"use strict";

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = styles;

require("regenerator-runtime/runtime");

var _nodeLogger = _interopRequireDefault(require("../utils/nodeLogger"));

var _gulpfile = require("../gulpfile.babel");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _defaultConfig = _interopRequireDefault(require("../defaultConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv.default.config();

function styles() {
  return _styles.apply(this, arguments);
}

function _styles() {
  _styles = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            _nodeLogger.default.log('STYLES');

            if (!process.env.DEST) _nodeLogger.default.warn().log('Missing env variable : DEST').log("\u2514\u2500 defaulting to ".concat(_defaultConfig.default.DEST)).log();
            if (!process.env.DEST_STYLES) _nodeLogger.default.warn().log('Missing env variable : DEST_STYLES').log("\u2514\u2500 defaulting to ".concat(_defaultConfig.default.DEST_STYLES)).log();
            if (!process.env.STYLES_FOLDER) _nodeLogger.default.warn().log('Missing env variable : STYLES_FOLDER').log("\u2514\u2500 defaulting to ".concat(_defaultConfig.default.STYLES_FOLDER)).log();
            _context.next = 7;
            return compileScss();

          case 7:
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);

            _nodeLogger.default.error(_context.t0.message);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));
  return _styles.apply(this, arguments);
}

function compileScss() {
  return _compileScss.apply(this, arguments);
}

function _compileScss() {
  _compileScss = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              try {
                console.log(_gulpfile.styles);

                _nodeLogger.default.startLoading('Styles : Compiling....');

                (0, _gulpfile.styles)();

                _nodeLogger.default.stopLoading('Styles', 'success');

                resolve();
              } catch (e) {
                _nodeLogger.default.stopLoading('Styles', 'error');

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
  return _compileScss.apply(this, arguments);
}