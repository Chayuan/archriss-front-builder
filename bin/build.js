#!/usr/bin/env node
"use strict";

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("regenerator-runtime/runtime");

var _scripts = require("./tasks/scripts");

var _styles = require("./tasks/styles");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function run() {
  return _run.apply(this, arguments);
}

function _run() {
  _run = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _scripts.scripts)();

          case 2:
            _context.next = 4;
            return (0, _styles.styles)();

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _run.apply(this, arguments);
}

run();