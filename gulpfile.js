'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./assets/sass/**/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./assets/sass/**/*.scss', ['sass']);
});

// For whatever reason, output style in the Sass task isn't working; adding this task
gulp.task('minify-css', () => {
  return gulp.src('./assets/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./assets/css/'));
});