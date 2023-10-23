var gulp = require('gulp');

var fileinclude = require('gulp-file-include');
var uglifycss = require('gulp-uglifycss');

gulp.task('css', async function () {
    gulp.src('./lib/sci/src/css/*.css')
      .pipe(uglifycss({
        "uglyComments": true
      }))
      .pipe(gulp.dest('./lib/sci/dist/css/'));
  });

  gulp.task('fileinclude', async function() {
    gulp.src('./src/*.html')
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('./'));
  });

  gulp.task('default', gulp.parallel('css', 'fileinclude') );
