const css = require('gulp-css');
const concat = require('gulp-concat');
const minifyCSS = require('gulp-csso');
const browserSync = require('browser-sync').create();
const { watch, series, src, dest } = require('gulp');



function jsHandle (cb) {
    src('./src/*.js')
        .pipe(concat('index.js'))
        .pipe(dest('dest', { overwrite: true }))
        .pipe(browserSync.stream());

    cb();
}
function htmlHandle (cb) {
    src('./src/*.html')
        .pipe(dest('dest', { overwrite:true }))
        .pipe(browserSync.stream());

    cb();
}

function cssHandle (cb) {
    src('./src/*.css')
        .pipe(css())
        .pipe(minifyCSS())
        .pipe(dest('dest'))
        .pipe(browserSync.stream());

    cb();
}

const watchOption ={
    events: 'all',
    ignoreInitial: false,
}

function watchFiles(){
    browserSync.init({
        server: {
            baseDir: 'dest',
            index: 'index.html'
        }

    })
    watch(
        './src/**/*.js',
        watchOption,
        jsHandle,
    ).on('change', browserSync.reload )
    watch(
        './src/*.html',
        watchOption,
        htmlHandle,
    ).on('change', browserSync.reload)
    watch(
        './src/**/*.css',
        watchOption,
        cssHandle,
    ).on('change', browserSync.reload)

}

exports.watch = watchFiles;
exports.default = series(htmlHandle, cssHandle, jsHandle);
