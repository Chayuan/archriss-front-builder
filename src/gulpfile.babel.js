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
import defaultConfig from './defaultConfig'

dotenv.config()

const PATHS = {
  src: {
    styles: (process.env.STYLES_FOLDER || defaultConfig.STYLES_FOLDER) + '/**/*.scss'
  },
  dest: {
    styles: (process.env.DEST_STYLES || defaultConfig.DEST_STYLES)
  }
}

export function styles(isProd) {
  const postcssPlugins = [
    mqpacker({
      sort: true
    }),
    autoprefixer({
      flexbox: 'no-2009'
    })
  ]

  // Production mode -> minify CSS
  if (isProd) {
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

  if (!isProd) {
    // Development mode
    return gulp
      .src(PATHS.src.styles)
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(postcss(postcssPlugins))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(`${PATHS.dest.styles}`))
  } else {
    // Production mode
    return gulp
      .src(PATHS.src.styles)
      .pipe(sass())
      .pipe(postcss(postcssPlugins))
      .pipe(postcss(postcssPlugins))
      .pipe(gulp.dest(`${PATHS.dest.styles}`))
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

