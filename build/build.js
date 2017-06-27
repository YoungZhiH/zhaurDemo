var ora = require('ora');
var path = require('path');
var rm = require('rimraf');
var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var webpackConfig = require('./webpack.conf');
console.log(
  '  Tip:\n' +
  '  开始走build.js.\n'
)
var spinner = ora('building for production...')
spinner.start();

var compiler = webpack(webpackConfig,function(err, stats){
    spinner.stop()
    if (err) throw err
})
// var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)


// webpack(webpackConfig, function (err, stats) {
//   spinner.stop()
//   if (err) throw err
//   process.stdout.write(stats.toString({
//     colors: true,
//     modules: false,
//     children: false,
//     chunks: false,
//     chunkModules: false
//   }) + '\n')
// })

// server = new webpackDevServer(compiler,{
//     hot:true,
//     noInfo:true,
//     filename:config.output.filename,
//     publicPath:config.output.publicPath
// });
