var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function(){
  return gulp.src('/src/assets/dev/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass())
    .pipe(gulp.dest('src/assets/prod/'))
});

gulp.task('css', function(){
  return gulp.src('/assets/prod/*.css')
    .pipe(concat())
    .pipe(gulp.dest('assets/prod/styles.css'))
});

gulp.task('default', ['sass','css']);