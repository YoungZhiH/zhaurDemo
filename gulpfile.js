var gulp = require('gulp'),
    concat = require('gulp-concat'),                            //- 多个文件合并为一个；
    gutil = require('gulp-util'),
    //fileinclude  = require('gulp-file-include'),
    template  = require('gulp-art-include'),                    //文件引入
    imagemin = require('gulp-imagemin'),                        //图片压缩
    rev = require('gulp-rev'),                                  //- 对文件名加MD5后缀
    GulpRev = require('gulp-rev'),                              //- 对文件名加MD5后缀
    revCollector = require('gulp-rev-collector'),               //- 路径替换
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js'),          //引用webpack
    clean = require('gulp-clean'),
    cssMin = require('gulp-clean-css'),                         // CSS 压缩 （不会去掉前缀）
    autoprefixer = require('gulp-autoprefixer'),
    stylus = require('gulp-stylus'), // stylus
    browserSync = require('browser-sync').create();

var paths = {
  less: ['./src/assets/less/*.less'],
  html: ['./src/rev/*.json', './src/**/*.html','!./src/tpl/**/*.html'],
  img: ['./src/assets/img/**/**/*']
}

gulp.task("cssclean", function(){
    return gulp.src(['./dist/assets/css/*.css','!./dist/assets/css/main.css'])
        .pipe(clean());
});

gulp.task("jsclean", function(){
    return gulp.src(['./dist/assets/js/*.js','!./dist/assets/js/common.js'])
        .pipe(clean());
});

// gulp.task('copyCss',  function() {
//   return gulp.src(['./src/assets/css/*.css'])
//     .pipe(gulp.dest('./dist/assets/css'))
// });

gulp.task('html', function() {
  gulp.src(['./src/rev/*.json', './src/**/*.html','!./src/tpl/**/*.html','./src/**/*.html'])   //- 读取文件
    .pipe(revCollector())                                                  //- 执行文件内css名的替换
    // .pipe(fileinclude({
    //   prefix: '@@',
    //   basepath: '@file'
    // }))
    .pipe(template())
    .pipe(gulp.dest('./dist/'));                                           //- 替换后的文件输出的目录
}); 

gulp.task('css', function() {
  return gulp.src('./src/assets/css/**/*.css')
    .pipe(gulp.dest('./dist/assets/css'));
});

gulp.task('stylus',['cssclean'],function () {
  return gulp.src('./src/assets/css/stylus/*.styl')
    .pipe(stylus())
    .pipe(cssMin())
    // .pipe(GulpRev())
    .pipe(gulp.dest('./dist/assets/css'))
    .pipe(GulpRev.manifest())         
    .pipe(gulp.dest('./src/assets/css/stylus/json'));  
});

gulp.task('move-js', function() {
  return gulp.src('./src/js/**/**/*.js')
    .pipe(gulp.dest('./dist/js/libs'));
});

gulp.task('img', function() {
  return gulp.src('./src/assets/img/**/**/*')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngcrush()]
    }))
    .pipe(gulp.dest('./dist/assets/img'));
});

//引用webpack对js进行操作
var myDevConfig = Object.create(webpackConfig);
var devCompiler = webpack(myDevConfig);
// ['jsclean'],
gulp.task("build-js",  function(callback) {
    devCompiler.run(function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build-js", err);
        gutil.log("[webpack:build-js]", stats.toString({
            colors: true
        }));
        callback();
    });
});



gulp.task('watch', function() {
  // 监控 js 文件，有变动则执行 script 任务
  gulp.watch('src/assets/js/**.js', ['build-js']);
  gulp.watch('src/components/*.vue', ['build-js']);
  gulp.watch('src/componentslist/*.vue', ['build-js']);

  // 监控图片文件，有变动则执行 image 任务
  // gulp.watch('src/assets/img/**/*', ['img']);

  // 监控 html 文件，有变动则执行 html 任务
  // gulp.watch('src/**/*.html', ['html']);

  // 监控 dist 目录下除 css 目录以外的变动（如js，图片等），则自动刷新页面
  gulp.watch('src/assets/css/stylus/*.styl',['stylus']);
});

gulp.task('serve', function() {  
    browserSync.init({  
        server: "./dist"  
    });  
  
    gulp.watch("./dist/assets/css/*.css").on('change', browserSync.reload);  
    gulp.watch("./dist/**/*.html").on('change', browserSync.reload);  
    // gulp.watch("./dist/assets/img/**/*").on('change', browserSync.reload);  
    gulp.watch("./dist/assets/js/**/*.js").on('change', browserSync.reload);  
});  