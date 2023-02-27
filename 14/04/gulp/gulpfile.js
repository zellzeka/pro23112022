// function helloGulp(cb){
//     console.log('Hello Gulp!');
//     cb();
// }
// exports.default = helloGulp;

// function world(cb){
//     console.log("Hello !!!!!!");
//     cb();
// }
// exports.world = world;   

var path={                      
    images:'img/*.png',
    css:'style/*.css',
    buildImg:'dist/img',
    buildStyle:'dist/style'
}

const {src, dest, series, parallel} = require('gulp'); 

function images(){
    return src(path.images)
    // plugins
    .pipe(dest(path.buildImg));
}

function css(){
    return src(path.css)
    // plugin
    .pipe(dest(path.buildStyle));
}

exports.paral = parallel(images, css);
// exports.default = series(images, css);