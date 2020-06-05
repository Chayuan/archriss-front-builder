import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import gulp from 'gulp'
import del from 'del'
import dotenv from 'dotenv'
import mqpacker from 'css-mqpacker'
import twig from 'gulp-twig'
import postcss from 'gulp-postcss'
import sourcemaps from 'gulp-sourcemaps'
import sass from 'gulp-sass'
import webpack from 'webpack-stream'

dotenv.config()

const destDevPath = `${process.env.DEST}/${process.env.DEV_SUBFOLDER}/`
const destProdPath = `${process.env.DEST}/${process.env.PROD_SUBFOLDER}/`

const PATHS = {
  src: {
    views: process.env.VIEWS_FOLDER + '/**/*.twig',
    styles: process.env.STYLES_FOLDER + '/**/*.scss',
    scripts: process.env.SCRIPTS_FOLDER + '/**/*'
  },
  dest: {
    global: process.env.DEST,
    viewsDev: destDevPath + process.env.DEST_VIEWS,
    viewsProd: destProdPath + process.env.DEST_VIEWS,
    stylesDev: destDevPath + process.env.DEST_STYLES,
    stylesProd: destProdPath + process.env.DEST_STYLES,
    scriptsDev: destDevPath + process.env.DEST_SCRIPTS,
    scriptsProd: destProdPath + process.env.DEST_SCRIPTS
  }
}

function cleanDist() {
  return del(PATHS.dest.global + '/')
}

function views(isDev) {
  return gulp
    .src(PATHS.src.views)
    .pipe(twig())
    .pipe(gulp.dest(isDev ? PATHS.dest.viewsDev : PATHS.dest.viewsProd))
}

function styles(isDev) {
  const postcssPlugins = [
    mqpacker({
      sort: true
    }),
    autoprefixer({
      flexbox: 'no-2009'
    })
  ]

  // Production mode -> minify CSS
  if (!isDev) {
    postcssPlugins.push(
      cssnano({
        preset: [
          'default',
          {
            discardComments: {
              removeAll: false // loud comments are needed to turn autoprefixer off
            }
          }
        ]
      })
    )
  }

  if (isDev) {
    // Development mode
    return gulp
      .src(PATHS.src.styles)
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(postcss(postcssPlugins))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(PATHS.dest.stylesDev))
  } else {
    // Production mode
    return gulp
      .src(PATHS.src.styles)
      .pipe(sass())
      .pipe(postcss(postcssPlugins))
      .pipe(gulp.dest(PATHS.dest.stylesProd))
  }
}

function scripts(isDev) {
  return gulp
    .src('src/js/index.js')
    .pipe(webpack(require(`./webpack.config.${isDev ? 'dev' : 'prod'}.js`)))
    .pipe(gulp.dest(isDev ? PATHS.dest.scriptsDev : PATHS.dest.scriptsProd))
}

async function build(isDev = true) {
  console.log(`building in ${isDev ? 'DEVELOPPEMENT' : 'PRODUCTION'}`)
  try {
    await cleanDist()
    views(isDev)
    styles(isDev)
    scripts(isDev)
  } catch (err) {
    console.error(err)
  }
}

async function buildProd() {
  await build(false)
}

async function watch() {
  // Launches tasks once before watching (creates files if needed)
  try {
    await cleanDist()
    views(true)
    styles(true)
    scripts(true)
  } catch (err) {
    console.error(err)
  }
  gulp.watch(PATHS.src.styles, styles)
  gulp.watch(PATHS.src.views, views)
  gulp.watch(PATHS.src.scripts, scripts)
}

gulp.task('build', build)
gulp.task('build:prod', buildProd)
gulp.task('watch', watch)

/* specific tasks */
gulp.task('scripts', () => {
  return new Promise((resolve, reject) => {
    try {
      scripts(true)
      resolve()
    } catch (e) {
      reject(e)
    }
  })
})

gulp.task('scripts:prod', () => {
  return new Promise((resolve, reject) => {
    try {
      scripts(false)
      resolve()
    } catch (e) {
      reject(e)
    }
  })
})

gulp.task('styles', () => {
  return new Promise((resolve, reject) => {
    try {
      styles(true)
      resolve()
    } catch (e) {
      reject(e)
    }
  })
})

gulp.task('styles:prod', () => {
  return new Promise((resolve, reject) => {
    try {
      styles(false)
      resolve()
    } catch (e) {
      reject(e)
    }
  })
})

gulp.task('views', () => {
  return new Promise((resolve, reject) => {
    try {
      views(true)
      resolve()
    } catch (e) {
      reject(e)
    }
  })
})

gulp.task('views:prod', () => {
  return new Promise((resolve, reject) => {
    try {
      views(false)
      resolve()
    } catch (e) {
      reject(e)
    }
  })
})

