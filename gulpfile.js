var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

var scriptsPaths = [
    'bower_components/underscore/underscore.js',
    'bower_components/backbone/backbone.js',
    'application/appInit.js',
    'application/models/*.js',
    'application/collections/*.js',
    'application/routes/*.js',
    'application/main.js',
];

gulp.task('scripts', function() {
    return gulp.src(scriptsPaths)
    .pipe($.concat('main.js'))
    .pipe(gulp.dest('js/'));
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
    .pipe(gulp.dest('css'));
});

gulp.task('default', ['sass', 'scripts'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch(['application/**/*.js'], ['scripts']);
});
