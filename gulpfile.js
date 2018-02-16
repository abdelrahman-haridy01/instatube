var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var cache = require('gulp-cache');
var cssnano = require('gulp-cssnano');
var del = require('del');
var gulp = require('gulp');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');

// browser live reload
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  });
});

// clear cache
gulp.task('cache:clear', function(done) {
  return cache.clearAll(done);
});

// clean up generated files
gulp.task('clean:dist', function() {
  return del.sync('dist');
});

// clean js file
gulp.task('clean:js', function() {
  return del.sync('js/build');
});

// minify images
gulp.task('images', function() {
  return gulp.src('app/img/*.+(png|jpg|gif|svg)')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('dist/img'))
});

// clean, lint, compile and minify js
gulp.task('js', ['clean:js', 'lint'], function() {
  return gulp.src('app/js/*.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('lint', function () {
  return gulp.src(['app/js/**/*.js', '!app/js/build', '!app/js/build/**'])
});

gulp.task('lint:sass', function () {
  return gulp
    .src('app/scss/**/*.scss')
});

// scss to css
gulp.task('sass', ['lint:sass'], function() {
  return gulp.src('app/scss/*.+(scss|css)')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(gulp.dest('dist/css'))
});

// useref build
gulp.task('useref', function() {
  return gulp.src('app/**/*.html')
    .pipe(useref())
    // minifies if js file
    .pipe(gulpIf('*.js', uglify()))
    // minifies if css
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('serve:build', ['build'], function() {
  browserSync.init({
    server: {
      baseDir: 'build'
    }
  });
});

// build
gulp.task('build', function(cb) {
  runSequence('cache:clear', 'clean:dist', ['sass', 'js', 'images'], 'useref', cb);
});

// watch
gulp.task('watch', ['browserSync', 'sass', 'images', 'useref'], function() {
  gulp.watch('app/scss/**/*.+(scss|css)', ['sass']);
  gulp.watch('app/img/**/*.+(png|jpg|gif|svg)', ['images']);
  gulp.watch('app/**/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

// default
gulp.task('default', function(cb) {
  runSequence(['sass', 'js', 'browserSync', 'watch'], cb)
});
