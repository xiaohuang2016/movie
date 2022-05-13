const {
    defineConfig
} = require('@vue/cli-service')
const webpack = require("webpack");
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        devServer: {
            // open: true,
            // port: '8080',
            // host: 'localhost',
            // https: false,
            proxy: {
                //名字可以自定义，这里我用的是api
                '/maoyan': {
                    target: 'https://m.maoyan.com/ajax/movieOninfoList', //设置你调用的接口域名和端口号 别忘了加http
                    changeOrigin: true, //这里设置是否跨域
                    ws: true,
                    pathRewrite: {
                        '^/maoyan': '/'
                    }
                },
                '/douban': {
                    target: 'https://movie.douban.com/', //设置你调用的接口域名和端口号 别忘了加http
                    changeOrigin: true, //这里设置是否跨域
                    ws: true,
                    pathRewrite: {
                        '^/douban': '/'
                    }
                }
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            })
        ]
    }
})