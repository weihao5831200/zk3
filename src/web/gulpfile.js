var gulp = require('gulp');

var sass = require('gulp-sass');

var autoprefixer = require('gulp-autoprefixer');

var minCss = require('gulp-clean-css');

var uglify = require('gulp-uglify');

var server = require('gulp-webserver');


gulp.task('devScss', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
        .pipe(minCss())
        .pipe(gulp.dest('./src/css'))
})

gulp.task('watch', function() {
    return gulp.watch('./src/scss/*.scss', gulp.series('devScss'))
})

//起服务

gulp.task('server', function() {
    return gulp.src('src')
        .pipe(server({
            port: 9090,
            livereload: true,
            proxies: [{
                source: '/api/get/train_tickets',
                target: 'http://localhost:3000/users/api/get/train_tickets'
            }]
        }))
})

//开发坏境
gulp.task('dev', gulp.series('devScss', 'server', 'watch'));