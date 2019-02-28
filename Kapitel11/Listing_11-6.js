'use strict';
const gulp = require('gulp');
const mocha = require('gulp-mocha');
const istanbul = require('gulp-istanbul');
const eslint = require('gulp-eslint');
gulp.task('test', () =>
  gulp
    .src('./test/*.js', { read: false })
    .pipe(mocha({ reporter: 'tap', timeout: 5000 }))
);
gulp.task('pre-test-coverage', () => {
  return gulp
    .src(['./lib/**/*.js'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire());
});
gulp.task('test-coverage', ['pre-test-coverage'], () => {
  return gulp
    .src(['./test/*.js'])
    .pipe(mocha({ timeout: 5000 }))
    .pipe(
      istanbul.writeReports({
        dir: './coverage',
        reporters: ['lcov', 'clover', 'json', 'text', 'text-summary']
      })
    )
    .pipe(istanbul.enforceThresholds({ thresholds: { global: 50 } }));
});
gulp.task('lint', () => {
  return gulp
    .src(['**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format('checkstyle', process.stdout));
});
