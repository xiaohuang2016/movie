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
                },
                '/auth': {
                    target: 'https://v2.eleadmin.com/api/auth/user', //设置你调用的接口域名和端口号 别忘了加http
                    changeOrigin: true, //这里设置是否跨域
                    ws: true,
                    pathRewrite: {
                        '^/auth': '/'
                    }
                },
                '/music': {
                    target: 'https://data.yinyuetai.com/video', //设置你调用的接口域名和端口号 别忘了加http
                    changeOrigin: true, //这里设置是否跨域
                    ws: true,
                    pathRewrite: {
                        '^/music': '/'
                    }
                },
                '/play': {
                    target: 'http://www.kuwo.cn/api/v1/www/music/playUrl', //设置你调用的接口域名和端口号 别忘了加http
                    changeOrigin: true, //这里设置是否跨域
                    ws: true,
                    pathRewrite: {
                        '^/play': '/'
                    }
                },
                '/vedioPlay': {
                    target: 'https://data.yinyuetai.com/video/getVideoInfo', //设置你调用的接口域名和端口号 别忘了加http
                    changeOrigin: true, //这里设置是否跨域
                    ws: true,
                    pathRewrite: {
                        '^/vedioPlay': '/'
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