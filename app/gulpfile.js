const postcss = require('gulp-postcss');
const gulp = require('gulp');
const cssnano = require('cssnano');

gulp.task('css', function() {
   const plugin = [
      cssnano()
   ];
   return gulp.src('./src/css/*.css')
       .pipe(postcss(plugin))
       .pipe(gulp.dest('./src/css/dest'));
});

gulp.task('serve', gulp.series(['css']), function() {
   gulp.watch('./css/*.css', gulp.series(['css']));
});

gulp.task('default', gulp.series(['serve']));