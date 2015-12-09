var gulp = require('gulp'),
  jade = require('gulp-jade')


gulp.task('jade', function() {
  var locals = {
    pretty: true
  };
  gulp.src(['./lib/templates/angular/*.jade'])
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./client/angular/templates'))
})

gulp.task('watch:jade',['jade'], function () {
  gulp.watch('./lib/templates/angular/*.jade',['jade'])
})
