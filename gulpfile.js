var gulp = require('gulp');
var path = require('path');
var open = require('open');
var lr = require('tiny-lr');
var express = require('express');
var es = require('event-stream');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var deploy = require('gulp-gh-pages');

var server = lr();
var app = express();

var APP_ROOT = __dirname + '/source';
var APP_PORT = 4000;

// Opens a browser with the application path.
gulp.task('open', ['serve'], function() {
  open('http://localhost:' + APP_PORT);
});

// Statically serves files and adds the LiveReload script.
gulp.task('serve', function() {
  app.use(require('connect-livereload')());
  app.use(express.static(APP_ROOT));
  app.listen(APP_PORT);
});

// Watches for file changes and reloads browser pages.
gulp.task('watch', function() {
  server.listen(35729, function(err) {
    if (err) {
      return console.log(err);
    }

    gulp.watch([
      'source/index.html',
      'source/assets/**/*',
      'source/js/**/*'
      ], function(evt) {
        server.changed({
          body: {
            files: [path.relative(APP_ROOT, evt.path)]
          }
        });
      });
  });
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

// Deploys to GitHub Pages.
gulp.task('deploy', function () {
    gulp.src('build/**/*')
        .pipe(deploy('git@github.com:ThibWeb/thibaudcolas.git', 'origin'));
});

// Default developer working task.
gulp.task('work', ['watch', 'open']);

gulp.task('default', ['work']);
