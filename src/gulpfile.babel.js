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

dotenv.config()

const PATHS = {
  src: {
    views: process.env.VIEWS_FOLDER + '/**/*.twig',
    styles: process.env.STYLES_FOLDER + '/**/*.scss'
  },
  dest: {
    global: process.env.DEST,
    viewsDev: process.env.DEST_VIEWS,
    viewsProd: process.env.DEST_VIEWS
  }
}

export function cleanDist() {
  return del(PATHS.dest.global + '/')
}

export function views(isDev) {
  return gulp
    .src(PATHS.src.views)
    .pipe(twig())
    .pipe(gulp.dest(isDev ? PATHS.dest.viewsDev : PATHS.dest.viewsProd))
}

export function styles(isDev) {
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
      .pipe(gulp.dest(`${process.env.DEST}/${process.env.DEST_STYLES}`))
  } else {
    // Production mode
    return gulp
      .src(PATHS.src.styles)
      .pipe(sass())
      .pipe(postcss(postcssPlugins))
      .pipe(gulp.dest(`${process.env.DEST}/${process.env.DEST_STYLES}`))
  }
}

export async function watch() {
  // Launches tasks once before watching (creates files if needed)
  try {
    await cleanDist()
    views(true)
    styles(true)
  } catch (err) {
    console.error(err)
  }
  gulp.watch(PATHS.src.styles, styles)
  gulp.watch(PATHS.src.views, views)
}

