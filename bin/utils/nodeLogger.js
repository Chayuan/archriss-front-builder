"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

require("regenerator-runtime/runtime");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/***
 * @repo: https://gitlab.com/Chayuan/logger-node
 * @author: Chayuan <Gwenaël Robert>
 ***/
var readline = require('readline');

var Reset = '\x1b[0m';
var Bright = '\x1b[1m';
var Dim = '\x1b[2m';
var Underscore = '\x1b[4m';
var Blink = '\x1b[5m';
var Reverse = '\x1b[7m';
var Hidden = '\x1b[8m';
var FgBlack = '\x1b[30m';
var FgRed = '\x1b[31m';
var FgGreen = '\x1b[32m';
var FgYellow = '\x1b[33m';
var FgBlue = '\x1b[34m';
var FgMagenta = '\x1b[35m';
var FgCyan = '\x1b[36m';
var FgWhite = '\x1b[37m';
var FgOrange = '\x1b[33m';
var BgBlack = '\x1b[40m';
var BgRed = '\x1b[41m';
var BgGreen = '\x1b[42m';
var BgYellow = '\x1b[43m';
var BgBlue = '\x1b[44m';
var BgMagenta = '\x1b[45m';
var BgCyan = '\x1b[46m';
var BgWhite = '\x1b[47m';

var Logger = /*#__PURE__*/function () {
  function Logger() {
    _classCallCheck(this, Logger);

    this.interval = null;
    this.loadingArray = ['\\', '|', '/', '-'];
  }

  _createClass(Logger, [{
    key: "log",
    value: function log() {
      if (arguments.length > 0) {
        var _console;

        (_console = console).log.apply(_console, Array.prototype.slice.call(arguments).concat([Reset]));
      } else {
        process.stdout.write(Reset);
        console.log();
      }

      return this;
    }
  }, {
    key: "success",
    value: function success() {
      process.stdout.write(BgGreen);
      return this;
    }
  }, {
    key: "greenBg",
    value: function greenBg() {
      return this.success();
    }
  }, {
    key: "green",
    value: function green() {
      process.stdout.write(FgGreen);
      return this;
    }
  }, {
    key: "error",
    value: function error() {
      process.stdout.write(BgRed);
      return this;
    }
  }, {
    key: "warn",
    value: function warn() {
      process.stdout.write(BgYellow);
      process.stdout.write(FgBlack);
      return this;
    }
  }, {
    key: "redBg",
    value: function redBg() {
      return this.error();
    }
  }, {
    key: "red",
    value: function red() {
      process.stdout.write(FgRed);
      return this;
    }
  }, {
    key: "yellowBg",
    value: function yellowBg() {
      process.stdout.write(BgYellow);
      process.stdout.write(FgBlack);
      return this;
    }
  }, {
    key: "cyanBg",
    value: function cyanBg() {
      process.stdout.write(BgCyan);
      return this;
    }
  }, {
    key: "cyan",
    value: function cyan() {
      process.stdout.write(FgCyan);
      return this;
    }
  }, {
    key: "blueBg",
    value: function blueBg() {
      process.stdout.write(BgBlue);
      return this;
    }
  }, {
    key: "blue",
    value: function blue() {
      process.stdout.write(FgBlue);
      return this;
    }
  }, {
    key: "yellow",
    value: function yellow() {
      process.stdout.write(FgYellow);
      return this;
    }
  }, {
    key: "magentaBg",
    value: function magentaBg() {
      process.stdout.write(BgMagenta);
      return this;
    }
  }, {
    key: "magenta",
    value: function magenta() {
      process.stdout.write(FgMagenta);
      return this;
    }
  }, {
    key: "whiteBg",
    value: function whiteBg() {
      process.stdout.write(BgWhite);
      process.stdout.write(FgBlack);
      return this;
    }
  }, {
    key: "white",
    value: function white() {
      return this;
    }
  }, {
    key: "magenta",
    value: function magenta() {
      process.stdout.write(FgMagenta);
      return this;
    }
  }, {
    key: "underscore",
    value: function underscore() {
      process.stdout.write(Underscore);
      return this;
    }
  }, {
    key: "startLoading",
    value: function startLoading(message) {
      var _this = this;

      var i = 0;
      this.interval = setInterval(function () {
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        process.stdout.write(FgOrange);
        process.stdout.write("".concat(_this.loadingArray[i % 4]));
        process.stdout.write(Reset);
        process.stdout.write(" --- ".concat(message));
        i += 1;
      }, 300);
    }
  }, {
    key: "line",
    value: function line() {
      var nbCol = process.stdout.columns;
      var myString = '';

      for (var i = 0; i < nbCol; ++i) {
        myString += '-';
      }

      console.log(myString);
      return this;
    }
  }, {
    key: "stopLoading",
    value: function stopLoading(message, loadingStatus) {
      if (this.interval) {
        process.stdout.clearLine();
        process.stdout.cursorTo(0);

        switch (loadingStatus) {
          case 'error':
            console.log(FgRed, 'X', Reset, "--- ".concat(message));
            break;

          case 'warning':
            console.log(FgOrange, 'X', Reset, "--- ".concat(message));
            break;

          default:
            console.log(FgGreen, 'V', Reset, "--- ".concat(message));
        }

        clearInterval(this.interval);
      }
    }
  }, {
    key: "cl",
    value: function cl(message) {
      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      readline.cursorTo(process.stdout, 0);
      if (message) process.stdout.write("".concat(message));
    }
  }, {
    key: "consoleClear",
    value: function consoleClear() {
      console.log('\\033[2J');
    }
  }, {
    key: "consoleReset",
    value: function consoleReset() {
      console.clear();
    }
  }, {
    key: "wrap",
    value: function () {
      var _wrap = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(message, promiseToWrap, params) {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
                    var oldConsoleLog, returnValue;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            oldConsoleLog = console.log;
                            _context.prev = 1;

                            _this2.startLoading(message);

                            console.log = function (logParams) {
                              _this2.cl();

                              oldConsoleLog('\t', '-', logParams);
                            };

                            if (!params) {
                              _context.next = 10;
                              break;
                            }

                            _context.next = 7;
                            return promiseToWrap.apply(void 0, _toConsumableArray(params));

                          case 7:
                            _context.t0 = _context.sent;
                            _context.next = 13;
                            break;

                          case 10:
                            _context.next = 12;
                            return promiseToWrap();

                          case 12:
                            _context.t0 = _context.sent;

                          case 13:
                            returnValue = _context.t0;
                            console.log = oldConsoleLog;

                            _this2.stopLoading(message, 'success');

                            resolve(returnValue);
                            _context.next = 24;
                            break;

                          case 19:
                            _context.prev = 19;
                            _context.t1 = _context["catch"](1);
                            console.log = oldConsoleLog;

                            _this2.stopLoading(message, 'error');

                            reject(_context.t1);

                          case 24:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[1, 19]]);
                  }));

                  return function (_x4, _x5) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function wrap(_x, _x2, _x3) {
        return _wrap.apply(this, arguments);
      }

      return wrap;
    }()
  }]);

  return Logger;
}();

module.exports = new Logger();