"use strict";

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = styles;

require("regenerator-runtime/runtime");

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
    var isProd,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            isProd = _args.length > 0 && _args[0] !== undefined ? _args[0] : false;
            _context.prev = 1;
            console.log("\n\x1B[1mSTYLES-".concat(isProd ? 'PROD' : 'DEV', "\x1B[0m"));

            if (!process.env.DEST_STYLES) {
              console.log('\x1b[33mWarning\x1b[0m', 'missing env variable : DEST_STYLES');
              console.log("\u2514\u2500 defaulting to ".concat(_defaultConfig.default.DEST_STYLES));
            }

            if (!process.env.STYLES_FOLDER) {
              console.log('\x1b[33mWarning\x1b[0m', 'missing env variable : STYLES_FOLDER');
              console.log("\u2514\u2500 defaulting to ".concat(_defaultConfig.default.STYLES_FOLDER));
            }

            _context.next = 7;
            return compileScss(isProd);

          case 7:
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            console.log(' \x1b[31mError\x1b[0m ', 'styles task failed');
            console.log(' \x1b[31mError\x1b[0m ', _context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));
  return _styles.apply(this, arguments);
}

function compileScss() {
  return _compileScss.apply(this, arguments);
}

function _compileScss() {
  _compileScss = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var isProd,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            isProd = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : false;
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              try {
                (0, _gulpfile.styles)(isProd);
                console.log(' \x1b[32mSuccess\x1b[0m', 'styles');
                resolve();
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
  return _compileScss.apply(this, arguments);
}