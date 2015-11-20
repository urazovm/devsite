var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  sourcemaps = require('gulp-sourcemaps');


gulp.task('js', function () {
  return gulp.src(['./lib/js/*.js', './lib/js/**/*.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('script.js'))
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./client/js'))
})


gulp.task('watch:js',['js'], function () {
  gulp.watch('./lib/js/**/**/.js',['js'])
})
