var gulp = require('gulp'); // 基础库
var less = require('gulp-less'); // LESS编译
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
gulp.task('less', function () {
    gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css/'))
		.pipe(reload({stream: true}));
});
gulp.task('serve',function() {
	gulp.watch('less/*',['less'])
})
//gulp.task('serve',['less'], function() {
//
//  browserSync.init({
//      server: "./"
//  });
//  gulp.watch("html/*.html").on('change', reload);
//	gulp.watch('less/*',['less'])
//});

//gulp.task('watch',function(){
//	gulp.watch('less/*',['less'])
//})
//gulp.task('default', ['serve']);