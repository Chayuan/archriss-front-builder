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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

            _context.next = 4;
            return compileScss();

          case 4:
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);

            _nodeLogger.default.error(_context.t0.message);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
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