var gulp = require('gulp')
  , uglify = require('gulp-uglify')
  , concat = require('gulp-concat')

var files = [
  "node_modules/fastclick/lib/fastclick.js",
  "src/index.js"
]

gulp.task('build', function() {
  return gulp.src(files)
         .pipe(concat('dist/index.js'))
         .pipe(gulp.dest('.'))
})

gulp.task('minified', function() {
  return gulp.src(files)
         .pipe(uglify())
         .pipe(concat('dist/index.min.js'))
         .pipe(gulp.dest('.'))
})

gulp.task('default', ['build', 'minified'])

