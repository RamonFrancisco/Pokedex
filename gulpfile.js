const   gulp = require('gulp'),
        sass = require('gulp-sass'),
        browserSync = require('browser-sync');

const paths = {
    src: {
        css: 'app/css/*.css',
        scss: 'app/scss/**/*.scss',
        js: 'js/**/8js'},
    dist: {
        css: 'dist/css',
        js: 'dist/js'
    }
}

gulp.task('sass', function(){
    return gulp.src(paths.src.scss)
        .pipe(sass())
        .pipe(gulp.dest(paths.dist.css))
});

gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
})

gulp.task('server', function(){
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    })
})


gulp.task('default', function(){
    console.log('deu bom');
});