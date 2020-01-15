const { resolve, join } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const url = require('url')
const publicPath = '/dist/'
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin').default;
const AutoDllPlugin = require('autodll-webpack-plugin');
const HappyPack = require('happypack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const uglify = require('uglifyjs-webpack-plugin');
const WebpackCdnPlugin = require('webpack-cdn-plugin');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
module.exports = (options = {}) => ({
    entry: {
    // vendor: ['vue','vuex','vue-router','axios'],

        common: ['./src/common/util.js', './src/common/config.js', './src/common/basic.js', './src/common/common.css', 'qs', 'jsonp'],
        app: './src/scripts/main.js'

    },


    output: {
        path: resolve(__dirname, 'dist'),
        filename: options.dev ? '[name].js' : '[name].[chunkhash].js',
        chunkFilename: options.dev ? '[id].js' : '[id].[chunkhash].js',
        publicPath: options.dev ? '/' : publicPath
    },

    module: {
        rules: [{
            test: /\.vue$/,
            use: 'happypack/loader?id=vue'
        },
        {
            test: /\.js$/,
            use: 'happypack/loader?id=js',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: 'happypack/loader?id=css'
        },
        {
            test: /\.less$/,
            use: 'happypack/loader?id=less'
        },
        {
            test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }]
        }
        ]
    },
    plugins: [
    //new BundleAnalyzerPlugin(),
        new HappyPack({
            id: 'js',
            threadPool: happyThreadPool,
            loaders: ['babel-loader?cacheDirectory=true']
        }),
        new HappyPack({
            id: 'css',
            threadPool: happyThreadPool,
            loaders: ['style-loader', 'css-loader', 'postcss-loader']
        }),
        new HappyPack({
            id: 'less',
            threadPool: happyThreadPool,
            loaders: ["style-loader", "css-loader", "less-loader", "postcss-loader"]
        }),
        new HappyPack({
            id: 'vue',
            threadPool: happyThreadPool,
            loaders: ['vue-loader']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            chunks: ['vendor']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: 2,
            chunks: ['common', 'app']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: 'manifest',
            chunks: ['common'],
            filename: 'manifest.bundle.[hash].js',
        }),
        new AutoDllPlugin({
            filename: '[name].[chunkhash].js',
            debug: true,
            path: '/',
            inject: true,
            entry: {
                vendor: ['vue', 'vuex', 'vue-router', 'axios']

            },
            plugins: [
                new uglify({
                    cache: true,
                    parallel: true,
                    sourceMap: false
                })
            ]
        }),
        // new WebpackCdnPlugin({
        //     modules: [
        //       {
        //         name: 'vue',
        //         var: 'Vue',
        //         path: options.dev ? '2.5.16/vue.js' : '2.5.16/vue.min.js',
        //       },
        //       {
        //         name: 'vue-router',
        //         var:'VueRouter',
        //         path: '3.0.1/vue-router.min.js',

        //       },
        //       {
        //         name: 'vuex',
        //         var: 'Vuex',
        //         path: '3.0.1/vuex.min.js',

        //       },
        //       {
        //         name:'axios',
        //         var: 'axios',
        //         path:'axios.min.js',

        //       },
        //       {
        //         name:'element-ui',
        //         var:'ELEMENT',
        //         path:'2.3.6/index.js',
        //         style:'2.3.6/theme-chalk/index.css'  
        //       }
        //     ],
        //     prod:true,
        //     prodUrl:'//s.gaodunwangxiao.com/static-resource/:name/:path',
        //     publicPath: '/node_modules'
        //   }),
        new HtmlWebpackPlugin({
            template: 'src/pages/index.tpl',
            inject: true,
            filename: 'index.html',
            chunks: ['common', 'manifest', 'app']
        }),
        new webpack.optimize.UglifyJsPlugin({
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress: {
                // 在UglifyJs删除没有用到的代码时不输出警告  
                warnings: false,
                // 删除所有的 `console` 语句
                // 还可以兼容ie浏览器
                drop_console: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true
            }
        }),

        new CopyWebpackPlugin([{
            from: '*/image/'
        }]),
        new ImageminPlugin({
            disable: options.dev ? true : false,
            pngquant: {
                quality: '80'
            },
            jpegtran: {
                progressive: true
            },
            test: /\.(jpe?g|png|gif|svg)$/i
        }),
        new webpack.DefinePlugin({
            ISDEV: options.dev ? true : false
        })

    ],
    resolve: {
        alias: {
            '~': resolve(__dirname, 'src'),
            'vueModal': join(__dirname, './src/plugins/vue-ui/modal')
        },
        extensions: ['.js', '.vue', '.json', '.css']
    },
    devServer: {
        host: 'dev-tomorrowsuit.gaodun.com',
        port: 2222,
        publicPath: "/",
        proxy: {
            '/api/': {
                target: 'http://127.0.0.1:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        hot: true,
        watchOptions: {
            aggregateTimeout: 30,
            poll: 300
        }
    },
    devtool: options.dev ? '#eval-source-map' : 'false'
})
