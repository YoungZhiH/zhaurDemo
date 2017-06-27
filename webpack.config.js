var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
var vue = require('vue-loader');
var vuxLoader = require('vux-loader');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var srcDir = path.resolve(process.cwd(), 'src/assets/');

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
    console.log(JSON.stringify(files)+"是什么呢");
    return files;
}
// 
var webpackConfig  = {
    cache: true,
    entry: getEntry(),
    output: {
        path: path.join(__dirname, "dist/assets/js/"),
        publicPath: "dist/assets/js/",
        filename: "[name].js",
        chunkFilename: '[id].js'
    },
    module: {
         rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /vue-scroller.src.*?js$/,
                loader: 'babel'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
            }]
            }
        ]
    },
    resolve: {
        extensions: [' ', '.js', '.vue'],  // 引用js和vue文件可以省略后缀名
        alias: {
            'Vue': './src/js/libs/vue/vue.js',
        }
    },
    devServer: {                    //webpack-dev-server配置
        historyApiFallback: true,   //不跳转
        noInfo : true,
        inline : true,                //实时刷新
        port : 9090,
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map',
    plugins: [
        // ["component", [
        //     {
        //       "libraryName": "mint-ui",
        //       "style": true
        //     }
        // ]],
        // 有选择性的提取（对象方式传参） 
        new CommonsChunkPlugin({
            name:'common', // 注意不要.js后缀
            chunks:['about']
        }),
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
        // new webpack.ProvidePlugin({
        //     '$': 'jquery'
        // })
    ]
};

module.exports = vuxLoader.merge(webpackConfig, {
  plugins: [
        {
            name: 'vux-ui'
        },
        {
            name: 'i18n',
            vuxStaticReplace: false,
            staticReplace: false,
            extractToFiles: 'src/locales/components.yml',
            localeList: ['en', 'zh-CN']
        }
    ]
})

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}