var gulp = require('gulp');
var ts = require('gulp-typescript');
var watchify = require('watchify');
var browserify = require('browserify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var tslint = require("gulp-tslint");
var _ = require('lodash');


var tsProject = ts.createProject('tsconfig.json');

var customOpts = {
  entries: ['./release/app/index.js'],
  debug: true
};
var browserifyOpts = _.assign({}, watchify.args, customOpts);
var b = browserify(browserifyOpts);
b.require('./release/app/index.js', {expose: 'app' });

gulp.task('compileApp', function () {
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('release/app'));
});

gulp.task("tslint", function () { 
    return tsProject.src()
        .pipe(tslint())
        .pipe(tslint.report("verbose", {
            reportLimit: 8
        }));
});

gulp.task('buildApp', ['compileApp', 'tslint'], function() {
    return gulp.start('bundleApp');
})


gulp.task('bundleApp', function () { 
    return b
        .bundle()
        // log errors if they happen
        .on('error', function(err) {
            gutil.log('Browserify Error', err.toString());
            this.emit('end'); // Ends the task
        })
        .pipe(source('bundle.js'))
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

gulp.task('buildScripts', function() { 
    return gulp.src('scripts/**/*')
               .pipe(gulp.dest('release/scripts'));
})


gulp.task('build', function () { 
    return gulp.start('buildApp', 'buildWeb', 'buildScripts');
});


gulp.task('watch', ['build'], function() {
    b.plugin(watchify); 
    b.on('update', function () { gulp.start('bundleApp') });
    b.on('log', gutil.log);

    gulp.watch(['app/**/*.ts', 'app/**/*.tsx'], ['compileApp', 'tslint']);
    gulp.watch(['web/**/*'], ['buildWeb']);
    gulp.watch(['scripts/**/*'], ['buildScripts']);
});




gulp.task('default', ['build']);
