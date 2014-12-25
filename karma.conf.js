// Karma configuration
module.exports = function(karma) {
  'use strict';

  karma.set({
    frameworks: ['jasmine', 'browserify'],
    // list of files / patterns to load in the browser
    files: [
      'test/*'
    ],
    // list of files to exclude
    exclude: [
    ],
    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],
    // web server port
    port: 9876,
    // cli runner port
    runnerPort: 9100,
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    // level of logging
    // possible values: karma.LOG_DISABLE || karma.LOG_ERROR || karma.LOG_WARN || karma.LOG_INFO || karma.LOG_DEBUG
    logLevel: karma.LOG_ERROR,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,
    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],
    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,
    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true,
    // Browserify config (all optional)
    browserify: {
      transform: ['6to5ify'],
      watch: false,
      debug: true
    },
    // Add browserify to preprocessors
    preprocessors: {'test/*': ['browserify']}
    // Not required if you've installed karma-browserify via npm.
    //plugins: ['karma-*', require('../')]
  });
};
