"use strict";

// Include Gulp & Tools We'll Use
var gulp = require("gulp");
var fs = require("fs");
var pagespeed = require("psi");

// Run PageSpeed Insights
// Update `url` below to the public URL for your site
gulp.task(
  "pagespeed",
  pagespeed.bind(null, {
    url: "https://thibaudcolas.github.io/thibaudcolas/",
    strategy: "mobile",
  })
);
