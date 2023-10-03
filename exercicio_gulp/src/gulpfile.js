const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Tarefa para compilar SASS
gulp.task('sass', function () {
  return gulp.src('src/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// Tarefa para comprimir imagens
gulp.task('imagemin', function () {
  return gulp.src('src/images/imagem1.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

// Tarefa para minificar o código JavaScript
gulp.task('uglify', function () {
  return gulp.src('src/js/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Tarefa padrão que executa todas as tarefas
gulp.task('default', gulp.parallel('sass', 'imagemin', 'uglify'));

// Tarefa de watch para observar alterações nos arquivos
gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('src/images/**/*', gulp.series('imagemin'));
  gulp.watch('src/js/**/*.js', gulp.series('uglify'));
});
