var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('mocha', function () {
    return gulp.src('test/*.js')
        .pipe(mocha({
        reporter: 'spec',
        timeout: 8000
    }));
});