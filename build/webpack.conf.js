var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var srcDir = path.resolve(process.cwd(), 'src/assets');

//获取多页面的每个入口文件，用于配置中的entry
function getEntry() {
    var jsPath = path.resolve(srcDir, 'js');
    var dirs = fs.readdirSync(jsPath);
    var matchs = [], files = {};
    dirs.forEach(function (item) {
        matchs = item.match(/(.+)\.js$/);
        console.log(matchs);
        if (matchs) {
            files[matchs[1]] = path.resolve(srcDir, 'js', item);
        }
    });
    console.log(JSON.stringify(files));
    return files;
}

module.exports = {
    cache: true,
    //devtool: "source-map",
    entry: './src/assets/js/home.js',
    output: {
        path: './dist/assets/js/',
        filename: "[name].js",
    },
    module: {
        loaders: [{
            test: /\.js$/,
            // loader: 'babel-loader',
            // include: path.resolve(srcDir, 'js'),
            // query:{
            //   "presets": ["es2015"],
            //   "plugins" : [
            //     "transform-es3-property-literals",
            //     "transform-es3-member-expression-literals",
            //   ]
            // }
        }]
    },
    resolve: {
        alias: {
            // jquery: srcDir + "/js/libs/jquery-vendor.js"//,
            // core: srcDir + "/js/core",
            // ui: srcDir + "/js/ui"
        }
    },
    plugins: [
        new CommonsChunkPlugin('common'),
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        })//,
        // new webpack.ProvidePlugin({
        //     '$': 'jquery'
        // })
    ]
};