const gulp = require('gulp')
const minify = require('gulp-clean-css')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const svgmin = require('gulp-svgmin')
const svgstore = require('gulp-svgstore')
const browserSync = require('browser-sync').create()

// Caminhos padrões
const BASE = {
  public: 'public/assets',
  source: 'src'
}

// Criar as funções
function styles() {
  return gulp.src(`${BASE.source}/sass/base.scss`)
    .pipe(sass())
    .pipe(minify())
    .pipe(rename('all.min.css'))
    .pipe(gulp.dest(`${BASE.public}/css`))
    .pipe(browserSync.stream({ stream: true }))
}

function scripts(done) {
  gulp.src(`${BASE.source}/js/scripts.js`)
            .pipe(uglify())
            .pipe(rename('scripts.min.js'))
            .pipe(gulp.dest(`${BASE.public}/js`))
  browserSync.reload();
  done();
}

function icons() {
  return gulp.src(`${BASE.source}/svg/*.svg`)
    // .pipe(svgmin())
    .pipe(svgstore())
    .pipe(rename({ basename: 'all.icons' }))
    .pipe(gulp.dest(`${BASE.public}`))
}

function stream() {
  browserSync.init({
    // browser: 'google chrome',
    server: {
      baseDir: './'
    }
  })
}

function watch() {
  gulp.watch(`${BASE.source}/sass/*`, styles)
  gulp.watch(`${BASE.source}/svg/*`, icons)
  gulp.watch(`${BASE.source}/js/*`, scripts)
}

const streamWatch = gulp.parallel(watch, stream)
const build = gulp.series(styles, scripts, icons)

// Cria a tarefa 'styles'
// gulp styles
gulp.task('styles', styles)

// Cria a tarefa 'icons'
// gulp icons
gulp.task('icons', icons)

// Criar a tarefa 'scripts'
gulp.task('scripts', scripts)

// Cria a tarefa 'stream'
// gulp stream
gulp.task('stream', )

gulp.task('build', build)
gulp.task('stream', streamWatch)
gulp.task('watch', watch)

// Define a 'default' task
// a Default task será chamada ao rodar apenas o comando: gulp
gulp.task('default', build)