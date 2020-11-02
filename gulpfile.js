var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('less', function () {
    return gulp.src('./styles/*.less')
        .pipe(less({
            paths: [ path.join('./styles/add') ]
         }))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('less:watch', function () {
    gulp.watch('./styles/*.less', gulp.series('less'));
});