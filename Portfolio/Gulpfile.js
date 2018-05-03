
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styleWork', function() {
    gulp.src('sass/styleWork.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/style_work.css'));
});

gulp.task('styles', function() {
    gulp.src('sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/style2.css'));
});



gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});
