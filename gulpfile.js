var gulp = require('gulp');
var open = require('open');
var express = require('express');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

var app = express();

var APP_ROOT = __dirname + '/source';
var APP_PORT = 4000;

// Opens a browser with the application path.
gulp.task('open', ['serve'], function() {
  open('http://localhost:' + APP_PORT);
});

// Statically serves files.
gulp.task('serve', function() {
  app.use(express.static(APP_ROOT));
  app.listen(APP_PORT);
  console.log('Listening on port ' + APP_PORT);
});

// Asserts code quality with various static code analysis tools.
gulp.task('lint', function() {
  return gulp.src('source/js/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter(stylish));
});

gulp.task('default', ['open']);
