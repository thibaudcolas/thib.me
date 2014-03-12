var gulp = require('gulp');
var open = require('open');
var express = require('express');

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

gulp.task('default', ['open']);
