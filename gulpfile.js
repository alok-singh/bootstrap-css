const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
  return gulp
    .src(['./custom.css', 'libs/css/*.css'])
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('copy-libs', function() {
  return gulp.src('./libs/js/*.js')
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy-images', function() {
  return gulp.src('./img/*')
    .pipe(gulp.dest('dist/img'));
});

gulp.task('minify-html', () => {
  return gulp
    .src('index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});