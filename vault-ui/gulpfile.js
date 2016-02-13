var gulp = require('gulp');
var ts = require('gulp-typescript');
var gulpInstall = require("gulp-install");


var tsProject = ts.createProject('tsconfig.json');
 
gulp.task('compile', function () {
    var tsResult = tsProject.src().pipe(
        ts(tsProject));

    return tsResult.js.pipe(gulp.dest('release'));
});


gulp.task('watch', ['npmInstall', 'compile'], function() {
    return gulp.watch(['app/**/*.ts', 'app/**/*.tsx'], ['compile']);
});


gulp.task('default', ['npmInstall', 'compile']);


gulp.task('npmInstall', function () {
    return gulp.src("./package.json")
               .pipe(gulpInstall());
})
