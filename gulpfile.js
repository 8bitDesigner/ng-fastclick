var gulp = require('gulp')
  , uglify = require('gulp-uglify')
  , concat = require('gulp-concat')

var files = [
  "bower_components/fastclick/lib/fastclick.js",
  "src/index.js"
]

gulp.task('build', function() {
  return gulp.src(files)
         .pipe(concat('index.js'))
         .pipe(gulp.dest('.'))
})

gulp.task('minified', function() {
  return gulp.src(files)
         .pipe(uglify())
         .pipe(concat('index.min.js'))
         .pipe(gulp.dest('.'))
})

gulp.task('default', ['build', 'minified'])

