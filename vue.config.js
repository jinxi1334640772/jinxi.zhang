// const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    baseUrl: '/',
    outputDir: 'dist',
    assetsDir: 'assets',
    lintOnSave: false,
    devServer: {
        open: true,
        host: 'localhost',
        port: '8080',
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http//localhost:5000/api/',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    // plugins:[
    //     new HtmlWebpackPlugin({
    //         filename: 'index.html',
    //         template: 'public/index.html'
    //     }),
    // ]
}
