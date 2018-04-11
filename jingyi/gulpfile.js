var fileinclude = require('gulp-file-include'),
    gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    cleanCSS = require('gulp-clean-css'),
    less = require('gulp-less'),
    browserSync = require('browser-sync'),
    batch = require('gulp-batch'),
    plumber = require('gulp-plumber'),
    auto = require("gulp-autoprefixer");
var reload = browserSync.reload;

gulp.task('style', function () {
    return gulp.src('./src/styles/*.less')
        .pipe(plumber())
        .pipe(less({compress: true}))
        .pipe(auto({
            grid: true,
            browsers: ['last 2 versions']
        }))
        .pipe(concatCss('index.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./src/styles'))
        .pipe(reload({stream: true}));
});

gulp.task('fileinclude', function() {
    return gulp.src(['./_view/**/*.html', '!./_view/common/**.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./view/'))
        .pipe(reload({stream: true}));
});

// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            port: 3000,
            baseDir: "./"
        }
    });
});

gulp.task('watch', function () {
    gulp.watch('./src/styles/*.less', ['style']);
    gulp.watch('./_view/**/*.html', ['fileinclude']);

});
gulp.task('default',['fileinclude', 'style', 'watch', 'browser-sync']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务

