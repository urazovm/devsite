var gulp = require('gulp'),
  jade = require('gulp-jade')


gulp.task('jade', function() {
  var locals = {};
  gulp.src(['./lib/templates/angular/*.jade'])
    .pipe(jade({
      locals: locals
    }))
    .pipe(gulp.dest('./client/angular/templates'))
})

gulp.task('watch:jade',['jade'], function () {
  gulp.watch('./lib/templates/angular/*.jade',['jade'])
})
