var browserify = require('browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var reactify = require('reactify');

gulp.task('browactify', function(){
    var b = browserify();
    b.transform(reactify);
    b.add('./src/app.jsx');
    return b.bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./static/js'));
});

gulp.task('watch', function() {
    gulp.watch(["src/**"], ["browactify"]);
});

gulp.task('default', ["browactify", "watch"]);

gulp.on('error', function(){
    console.log('error');
});