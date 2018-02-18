const gulp = require('gulp');

const gulpMerge = require('gulp-merge');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rev = require('gulp-rev');
const revReplace = require("gulp-rev-replace");


gulp.task('scripts', () => {
    const manifest = gulp.src('dist/static/rev-manifest.json')

    return gulpMerge(
        gulp.src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/p5/lib/p5.js',
            'node_modules/typed.js/lib/typed.js',
            'node_modules/fullpage.js/dist/jquery.fullpage.extensions.min.js',
            ]),
        gulp.src('src/static/scripts/**/*.js'))
        .pipe(uglify())
        .pipe(concat('bundle.js'))
        .pipe(revReplace({manifest: manifest}))
        .pipe(rev())
        .pipe(gulp.dest('dist/static/scripts/'))
        .pipe(rev.manifest('dist/static/rev-manifest.json', {
            base:'dist/static/',
            merge: true
        }))
        .pipe(gulp.dest('dist/static/'));
});
