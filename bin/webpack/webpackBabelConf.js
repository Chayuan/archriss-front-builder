"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "presets": [["@babel/preset-env", {
    "targets": {
      "chrome": 58,
      "ie": 11
    },
    "useBuiltIns": "usage",
    "corejs": 3
  }], "@babel/preset-react"],
  "plugins": [["@babel/plugin-transform-runtime", {
    "regenerator": true
  }], ["module-resolver", {
    "root": ["./src/js"]
  }]]
};
exports.default = _default;