'use strict';

var gulp = require('gulp');

var fs = require('fs')
fs.readdirSync(__dirname + '/gulpTasks').forEach(function (task) {
  require('./gulpTasks/'+ task)
})

gulp.task('dev', ['watch:css', 'watch:js', 'watch:jade','dev:server'])
