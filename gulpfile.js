var gulp = require('gulp');
var babel = require('gulp-babel');

var path = require('path');

var paths = {
    es6: ['src/**/*.js'],
    es5: 'dist'
};
gulp.task('default', function () {
    return gulp.src(paths.es6)
        .pipe(babel())
        .pipe(gulp.dest(paths.es5));
});