// const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  lintOnSave: false,
  devServer: {
    open: true, // 自动打开浏览器
    host: 'localhost',
    port: '8080',
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http//localhost:5000/api/',
        ws: true, // 是否跨越
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack: config => {
    config.module.rule('less')
      .test(/\.less$/)
      .use('less-loader')
      .loader('less-loader')
      .end()
  }
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     filename: 'index.html',
  //     template: 'public/index.html'
  //   }),
  // ]
}

// const { resolve } = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const url = require('url');
// const publicPath = '/dist/';
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const fs = require('fs');
// fs.stat('./index.html', (exists) => {
//   try {
//     if (exists) {
//       fs.unlink('./index.html', (err) => {
//         if (err) {
//           throw err;
//         }
//       });
//     }
//   } catch (err) {
//     // eslint-disable-next-line no-console
//     console.error(err);
//   }
// });

// module.exports = (options = {}) => ({
//   entry: {
//     vendor: './src/vendor',
//     app: './src/main.js'
//   },
//   output: {
//     path: resolve(__dirname, 'dist'),
//     filename: options.dev ? '[name].js' : '[name].js?[chunkhash]',
//     chunkFilename: '[name].js?[chunkhash]',
//     publicPath: options.dev ? '/assets/' : publicPath
//   },
//   module: {
//     rules: [
//       {
//         test: /\.vue$/,
//         use: [{
//           loader: 'vue-loader',
//           options: {
//             transformToRequire: {
//               "audio": "src"
//             }
//           }
//         }]
//       },
//       {
//         test: /\.js$/,
//         use: ['babel-loader'],
//         include: [
//           resolve('node_modules/pinyin'),
//           resolve('src')
//         ]
//       },
//       {
//         test: /\.html$/,
//         use: [{
//           loader: 'html-loader',
//           options: {
//             root: resolve(__dirname, 'src'),
//             attrs: ['img:src', 'link:href']
//           }
//         }]
//       },
//       {
//         test: /\.css$/,
//         // use: ['style-loader', 'css-loader', 'postcss-loader']
//         use: options.dev ? ['style-loader', 'css-loader', 'postcss-loader'] : ExtractTextPlugin.extract({
//           fallback: "style-loader",
//           use: "css-loader"
//         })
//       },
//       {
//         test: /\.less$/,
//         use: options.dev ? [
//           'style-loader',
//           {
//             loader: 'css-loader',
//             options: {
//               importLoaders: 1
//             }
//           },
//           'less-loader'
//         ] : ExtractTextPlugin.extract({
//           use: [
//             {
//               loader: "css-loader"
//             },
//             {
//               loader: "less-loader"
//             }
//           ],
//           fallback: "style-loader"
//         })
//       },
//       {
//         test: /favicon\.png$/,
//         use: [{
//           loader: 'file-loader',
//           options: {
//             name: '[name].[ext]?[hash]'
//           }
//         }]
//       },
//       {
//         test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
//         exclude: /favicon\.png$/,
//         use: [{
//           loader: 'url-loader',
//           options: {
//             limit: 10000
//           }
//         }]
//       },
//       {
//         test: /\.(mp3|ogg)(\?.*)?$/,
//         loader: 'url-loader',
//         options: {
//           limit: 10000,
//           name: '[name].[hash:7].[ext]'
//         }
//       },
//       {
//         test: /\.(vue|js)$/,
//         loader: 'eslint-loader',
//         enforce: "pre",
//         include: [resolve(__dirname, 'src')], // 指定检查的目录
//         options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine 
//           // fix:true,
//           formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
//         }
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       filename: options.dev ? 'index.html' : '../index.html',
//       template: 'src/index.html'
//     }),
//     new ExtractTextPlugin({
//       filename: "main.css?[hash]",
//       allChunks: true,
//     }),
//     new webpack.LoaderOptionsPlugin({
//       test: /\.vue$/,
//       options: {
//         vue: {
//           loaders: {
//             css: ExtractTextPlugin.extract({
//               fallback: 'vue-style-loader',
//               use: 'css-loader',
//             }),
//           }
//         }
//       }
//     })
//   ],
//   resolve: {
//     alias: {
//       '~': resolve(__dirname, 'src')
//     }
//   },
//   devServer: {
//     host: 'dev-eds.gaodun.com',
//     port: 8010,
//     proxy: {
//       '/api/': {
//         target: 'http://127.0.0.1:8080',
//         changeOrigin: true,
//         pathRewrite: {
//           '^/api': ''
//         }
//       }
//     },
//     historyApiFallback: {
//       index: url.parse(options.dev ? '/assets/' : publicPath).pathname
//     }
//   },
//   devtool: options.dev ? '#eval-source-map' : false
// });
