var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('css', function() {
  // place code for your default task here
  var processors = [autoprefixer({ browsers: ['last 2 versions'] })];

  return gulp.src('./src/*.css')
          .pipe(postcss(processors))
          .pipe(gulp.dest('./css'));
});
