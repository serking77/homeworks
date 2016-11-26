var gulp = require('gulp');

var server = require('gulp-server-livereload');

gulp.task('webserver', function() {
  gulp.src('hm7/01')
    .pipe(server({
    	 livereload: true,
      defaultFile: 'index.html'
    }));
});



