var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

var scriptsPaths = [
    'bower_components/webcomponentsjs/webcomponents-lite.js',
    'bower_components/lodash/lodash.js',
    'bower_components/angular/angular.js',
    'bower_components/angular-route/angular-route.js',
    'bower_components/angularUtils-pagination/dirPagination.js',
    'bower_components/angular-simple-logger/dist/angular-simple-logger.js',
    'bower_components/angular-google-maps/dist/angular-google-maps.js',
    'application/helpers.js',
    'application/main.js',
    'application/controllers/*.js',
    'application/services/*.js',
];

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch(['scss/**/*.scss'], ['sass']);
    gulp.watch(['application/**/*.js'], ['scripts']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("./templates/*.html").on('change', browserSync.reload);
});

gulp.task('scripts', function() {
    return gulp.src(scriptsPaths)
    .pipe($.concat('main.js'))
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream());
});

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['sass', 'scripts'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch(['application/**/*.js'], ['scripts']);
});
