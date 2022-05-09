const {
    defineConfig
} = require('@vue/cli-service')
const webpack = require("webpack");
<<<<<<< HEAD

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
  },
  devServer: {
    overlay: { // 让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true
    },
    host: "localhost",
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: false, //配置后自动启动浏览器
    hotOnly: true, // 热更新
    // proxy: 'http://localhost:8080'   // 配置跨域处理,只有一个代理
    proxy: { //配置多个代理
        "/testIp": {
            target: "https://movie.douban.com",
            changeOrigin: true,
            ws: true,//websocket支持
            secure: false,
            pathRewrite: {
                "^/testIp": "/"
            }
        },
        "/elseIp": {
            target: "http://197.0.0.2:8088",
            changeOrigin: true,
            //ws: true,//websocket支持
            secure: false,
            pathRewrite: {
                "^/elseIp": "/"
            }
        },
    }
}
}
=======
>>>>>>> refs/remotes/origin/main
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        devServer: {
            open: true,
            port: '8082',
            host: 'localhost',
            https: false,
            proxy: {
                //名字可以自定义，这里我用的是api
                '/api': {
                    target: 'https://movie.douban.com', //设置你调用的接口域名和端口号 别忘了加http
                    changeOrigin: true, //这里设置是否跨域
                    ws: true,
                    pathRewrite: {
                        '^/api': ''
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