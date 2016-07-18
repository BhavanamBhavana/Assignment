var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify',function(){
    browserify('./src/main.js')
        .transform('reactify')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('dist/')) //we don't need to create this folder gulp will auto create this
});


gulp.task('copy',function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
    gulp.src('src/*.*')
        .pipe(gulp.dest('dist/'));
});

gulp.task('default',['browserify','copy'],function(){
    return gulp.watch('src/*.*',['browserify','copy']);
});
