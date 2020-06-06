"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanDist = cleanDist;
exports.views = views;
exports.styles = styles;
exports.watch = watch;

require("regenerator-runtime/runtime");

var _autoprefixer = _interopRequireDefault(require("autoprefixer"));

var _cssnano = _interopRequireDefault(require("cssnano"));

var _gulp = _interopRequireDefault(require("gulp"));

var _del = _interopRequireDefault(require("del"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cssMqpacker = _interopRequireDefault(require("css-mqpacker"));

var _gulpTwig = _interopRequireDefault(require("gulp-twig"));

var _gulpPostcss = _interopRequireDefault(require("gulp-postcss"));

var _gulpSourcemaps = _interopRequireDefault(require("gulp-sourcemaps"));

var _gulpSass = _interopRequireDefault(require("gulp-sass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv.default.config();

var PATHS = {
  src: {
    views: process.env.VIEWS_FOLDER + '/**/*.twig',
    styles: process.env.STYLES_FOLDER + '/**/*.scss'
  },
  dest: {
    global: process.env.DEST,
    viewsDev: process.env.DEST_VIEWS,
    viewsProd: process.env.DEST_VIEWS
  }
};

function cleanDist() {
  return (0, _del.default)(PATHS.dest.global + '/');
}

function views(isDev) {
  return _gulp.default.src(PATHS.src.views).pipe((0, _gulpTwig.default)()).pipe(_gulp.default.dest(isDev ? PATHS.dest.viewsDev : PATHS.dest.viewsProd));
}

function styles(isDev) {
  var postcssPlugins = [(0, _cssMqpacker.default)({
    sort: true
  }), (0, _autoprefixer.default)({
    flexbox: 'no-2009'
  })]; // Production mode -> minify CSS

  if (!isDev) {
    postcssPlugins.push((0, _cssnano.default)({
      preset: ['default', {
        discardComments: {
          removeAll: false // loud comments are needed to turn autoprefixer off

        }
      }]
    }));
  }

  if (isDev) {
    // Development mode
    return _gulp.default.src(PATHS.src.styles).pipe(_gulpSourcemaps.default.init()).pipe((0, _gulpSass.default)()).pipe((0, _gulpPostcss.default)(postcssPlugins)).pipe(_gulpSourcemaps.default.write('.')).pipe(_gulp.default.dest("".concat(process.env.DEST, "/").concat(process.env.DEST_STYLES)));
  } else {
    // Production mode
    return _gulp.default.src(PATHS.src.styles).pipe((0, _gulpSass.default)()).pipe((0, _gulpPostcss.default)(postcssPlugins)).pipe(_gulp.default.dest("".concat(process.env.DEST, "/").concat(process.env.DEST_STYLES)));
  }
}

function watch() {
  return _watch.apply(this, arguments);
}

function _watch() {
  _watch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return cleanDist();

          case 3:
            views(true);
            styles(true);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 10:
            _gulp.default.watch(PATHS.src.styles, styles);

            _gulp.default.watch(PATHS.src.views, views);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _watch.apply(this, arguments);
}