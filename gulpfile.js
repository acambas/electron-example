var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var gbrowserify = require('gulp-browserify');

gulp.task('browserify', function () {
    return browserify({entries: './src/app.js', extensions: ['.js'], debug: false})
        .transform(babelify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('build',['browserify'], function name(params) {
    gulp.src('./dist/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
})

gulp.task('watch', function () {
    gulp.watch('./src/*.js', ['build']);
});

gulp.task('default', ['watch']);

