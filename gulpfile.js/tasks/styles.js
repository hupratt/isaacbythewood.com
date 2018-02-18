const gulp = require('gulp');

const gulpMerge = require('gulp-merge');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rev = require('gulp-rev');
const revReplace = require("gulp-rev-replace");

const runSequence = require('run-sequence');


gulp.task('styles', () => {
    const manifest = gulp.src('build/static/rev-manifest.json')

    return gulpMerge(
        gulp.src([
            'node_modules/normalize.css/normalize.css',
            'node_modules/fullpage.js/dist/jquery.fullpage.css'
            ]),
        gulp.src('static/styles/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            })))
        .pipe(cleanCSS({
            level: {
                1: {specialComments: 0}
            }
        }))
        .pipe(concat('bundle.css'))
        .pipe(revReplace({manifest: manifest}))
        .pipe(rev())
        .pipe(gulp.dest('build/static/styles/'))
        .pipe(rev.manifest('build/static/rev-manifest.json', {
            base:'build/static/',
            merge: true
        }))
        .pipe(gulp.dest('build/static/'));
});