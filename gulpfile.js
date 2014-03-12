var gulp = require('gulp');
var express = require('express');

var app = express();

var APP_ROOT = __dirname + '/source';
var APP_PORT = 4000;

// Statically serves files.
gulp.task('serve', function() {
  app.use(express.static(APP_ROOT));
  app.listen(APP_PORT);
});

gulp.task('default', ['serve']);
