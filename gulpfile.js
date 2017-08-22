var gulp = require('gulp');
var server = require('gulp-server-livereload');
var styles = require('./gulp-tasks/sass')();
var templates = require('./gulp-tasks/templates')();
var scripts = require('./gulp-tasks/scripts')();
var copy = require('./gulp-tasks/copy')();
var config = require('./gulp-tasks/config');

// Watch task
gulp.task('default', ['purifycss', 'templates', 'scripts', 'copy'], function() {
  // run task initially, after that watch
  // gulp.start(['styles', 'templates']);
  gulp.watch(config.source + 'scss/**/*.scss',['styles']);
  gulp.watch(config.source + 'pages/**/*.html',['templates']);
  gulp.src(config.dest)
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});
