var gulp = require('gulp'),
  sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./lib/sass/app.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./client/css'));
});

gulp.task('watch:css', function () {
  gulp.watch('./lib/sass/**/*.sass', ['sass'])
})
