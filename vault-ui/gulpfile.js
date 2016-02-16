var gulp = require('gulp');
var ts = require('gulp-typescript');
var gulpInstall = require("gulp-install");
var watchify = require('watchify');
var browserify = require('browserify');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var _ = require('lodash');


var tsProject = ts.createProject('tsconfig.json');

var customOpts = {
  entries: ['./release/app/app.js'],
  debug: true
};
var browserifyOpts = _.assign({}, watchify.args, customOpts);
var b = browserify(browserifyOpts); 



gulp.task('compileApp', function () {
    var tsResult = tsProject.src().pipe(
        ts(tsProject));

    return tsResult.js.pipe(gulp.dest('release'));
});


gulp.task('buildApp', ['compileApp'], function() {
    return gulp.start('bundleApp');
})


gulp.task('bundleApp', function () { 
    return b.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('appBundle.js'))
    // optional, remove if you don't need to buffer file contents
    // .pipe(buffer())
    // // optional, remove if you dont want sourcemaps
    // .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
    // Add transformation tasks to the pipeline here.
    // .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./release/scripts'));
});


gulp.task('buildWeb', function() { 
    return gulp.src('web/**/*')
               .pipe(gulp.dest('release'));
});


gulp.task('build', ['npmInstall'], function () { 
    return gulp.start('buildApp', 'buildWeb');
});


gulp.task('watch', ['build'], function() {
    b = watchify(b); 
    b.on('update', function () { gulp.start('bundleApp') });
    b.on('log', gutil.log);

    gulp.watch(['app/**/*.ts', 'app/**/*.tsx'], ['compileApp']);
    gulp.watch(['web/**/*'], ['buildWeb']);
});


gulp.task('default', ['build']);


gulp.task('npmInstall', function () {
    return gulp.src("./package.json")
               .pipe(gulpInstall());
});
