var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('lint', function() {
    return gulp.src('scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function() {
    return gulp.src('scripts/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('scripts/*.js', ['lint', 'scripts']);
});

gulp.task('default', ['lint', 'scripts', 'watch']);