var gulp = require('gulp');

var sass = require('gulp-sass');

// compile SASS
gulp.task('sass', function(){
	return gulp.src('scss/index.scss')
		.pipe( sass() )
		.pipe( gulp.dest('public/css/') )
});


// watch
gulp.task('watch', function(){
	gulp.watch('scss/*', ['sass']);
});


gulp.task('default', ['sass','watch']);