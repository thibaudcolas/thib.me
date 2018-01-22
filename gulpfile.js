'use strict';

// Include Gulp & Tools We'll Use
var gulp = require('gulp');
var fs = require('fs');
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var pagespeed = require('psi');
var reload = browserSync.reload;

var AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10',
];

gulp.task('lint-css', function() {
    return gulp
        .src(['app/styles/**/*.scss'])
        .pipe($.scssLint())
        .pipe($.if(!browserSync.active, $.scssLint.failReporter()));
});

// Copy all static files
gulp.task('copy', function() {
    return gulp
        .src(
            ['app/**', '!app/vendor/**', '!app/styles/**', '!app/index.html'],
            {
                dot: true,
            }
        )
        .pipe(gulp.dest('dist'))
        .pipe($.size({ title: 'copy' }));
});

// Copy Web Fonts To Dist
gulp.task('fonts', function() {
    return gulp
        .src(['app/fonts/**/*'])
        .pipe(gulp.dest('dist/fonts'))
        .pipe($.size({ title: 'fonts' }));
});

// Compile and Automatically Prefix Stylesheets
gulp.task('styles', function() {
    // For best performance, don't add Sass partials to `gulp.src`
    return gulp
        .src(['app/styles/*.scss', 'app/styles/**/*.css'])
        .pipe($.changed('styles', { extension: '.scss' }))
        .pipe(
            $.sass({
                errLogToConsole: true,
                precision: 10,
            })
        )
        .on('error', console.error.bind(console))
        .pipe($.autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }))
        .pipe(gulp.dest('.tmp/styles'))
        .pipe($.size({ title: 'styles' }));
});

// Scan Your HTML For Assets & Optimize Them
gulp.task('assets', ['styles'], function() {
    var assets = $.useref.assets({ searchPath: '{.tmp,app}' });

    return (gulp
            .src('app/index.html')
            .pipe(assets)
            //   // Remove Any Unused CSS
            //   .pipe(
            //     $.if(
            //       '*.css',
            //       $.uncss({
            //         html: ['app/index.html'],
            //         // CSS Selectors for UnCSS to ignore
            //         ignore: [/.js-email-replace/],
            //       })
            //     )
            //   )
            // Concatenate And Minify Styles
            .pipe($.if('*.css', $.csso()))
            .pipe($.if('*.css', $.minifyCss({ keepSpecialComments: 0 })))
            .pipe(assets.restore())
            .pipe($.useref())
            // Output Files
            .pipe(gulp.dest('dist'))
            .pipe($.size({ title: 'assets' })) );
});

// Transform main html.
gulp.task('html', ['assets'], function() {
    var styleToken = '<link rel=stylesheet href=styles/main.min.css>';

    return (gulp
            .src('dist/index.html')
            .pipe($.minifyHtml())
            .pipe(
                $.replace(
                    styleToken,
                    '<style>' +
                        fs.readFileSync('dist/styles/main.min.css') +
                        '</style>'
                )
            )
            // Output Files
            .pipe(gulp.dest('dist'))
            .pipe($.size({ title: 'html' })) );
});

// Clean Output Directory
gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

// Watch Files For Changes & Reload
gulp.task('serve', ['styles'], function() {
    browserSync({
        notify: false,
        server: ['.tmp', 'app'],
    });

    gulp.watch(['app/index.html'], reload);
    gulp.watch(['app/styles/**/*.{scss,css}'], ['lint-css', 'styles', reload]);
    gulp.watch(['app/images/**/*'], reload);
});

// Build and serve the output from the dist build
gulp.task('serve:dist', ['build'], function() {
    browserSync({
        notify: false,
        server: 'dist',
    });
});

// Build Production Files, the Default Task
gulp.task('build', ['clean'], function(cb) {
    runSequence(['html', 'copy'], cb);
});

// Run PageSpeed Insights
// Update `url` below to the public URL for your site
gulp.task(
    'pagespeed',
    pagespeed.bind(null, {
        url: 'https://thibaudcolas.github.io/thibaudcolas/',
        strategy: 'mobile',
    })
);

// Build Production Files, the Default Task
gulp.task('default', ['build']);
