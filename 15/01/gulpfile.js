const {src, dest, series, parallel} = require('gulp');
const plumber = require('gulp-plumber'); 
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const beautify = require('gulp-beautify');

var path={               
    images:'app/img/*.png',
    css:'app/style/*.css',
    buildImg:'dist/img',
    buildStyle:'dist/style'
}

function optimizeHTML() {
    return src('app/*.html')
        .pipe(plumber())
        .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
        .pipe(dest('dist/'))
}

function imageMin() {
    return src('app/img/*.png')
        .pipe(imagemin())
        .pipe(dest('dist/img/'))
}

function minifyJS() {
    return src('app/js/*.js')
        .pipe(plumber())
        .pipe(beautify.js({ indent_size: 2 }))
        .pipe(dest('dist/js/'))
}


exports.default = parallel(optimizeHTML, imageMin, minifyJS);