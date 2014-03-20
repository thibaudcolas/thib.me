var gulp = require('gulp');
var open = require('open');
var express = require('express');
var es = require('event-stream');
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

// Builds the project before deployment.
gulp.task('build', function() {
  return es.concat(
    gulp.src(['source/index.html'])
      .pipe(gulp.dest('build')),
    gulp.src(['source/assets/root/*'])
      .pipe(gulp.dest('build'))
  );
});

// Asserts code quality with various static code analysis tools.
gulp.task('lint', function() {
  return gulp.src('source/js/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter(stylish));
});

gulp.task('default', ['open']);
