const gulp = require('gulp')
const minify = require('gulp-clean-css')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const browserSync = require('browser-sync').create()

gulp.task('sass', () => {
    return gulp.src('src/sass/base.scss')
        .pipe(sass())
        .pipe(minify())
        .pipe(rename("all.min.css"))
        .pipe(gulp.dest('public/assets/css'))
        .pipe(browserSync.stream({stream: true}))
})

gulp.task('stream',() => {
    browserSync.init({
        // browser: 'google-chrome',
        server: {
            baseDir: './'
        }
    });
    gulp.watch('src/sass/*.scss',['sass'])
})

gulp.task('default',['stream'])