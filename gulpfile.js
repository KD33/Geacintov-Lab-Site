var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var minify = require('gulp-minify');


gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(cleanCSS({keepSpecialComments : 0}))
        .pipe(gulp.dest('src/css'))
});

//move HTML to dist folder
gulp.task('copyHTML', function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist/src'))
    gulp.src('src/html/*.html')
        .pipe(gulp.dest('dist/src/html'))
})

gulp.task('copyJS', function(){
    gulp.src('src/js/*.js')
        .pipe(gulp.dest('dist/src/js'))
    gulp.src('src/js/Reactjs/*.js')
        .pipe(gulp.dest('dist/src/js/Reactjs'))
})

//optimize images
gulp.task('imagemin', function(){
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/src/images'))
    gulp.src('src/images/CurrentStaff/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/src/images/CurrentStaff'))
})

//minify CSS
gulp.task('styles', function(){
    gulp.src('src/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/src/css'))
})

//minify JS
gulp.task('scripts', function(){
    gulp.src('src/js/*.js')
        .pipe(minify())
        .pipe(gulp.dest('dist/src/js'))
})



gulp.task('default', function (){
    gulp.watch('src/scss/**/*.scss', ['sass'], ['minify-css']);
});
