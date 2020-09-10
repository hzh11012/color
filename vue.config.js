module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://zhongguose.com', //API服务器的地址
                ws: true,  //代理websockets
                changeOrigin: true, // 虚拟的站点需要更管origin
                pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
                    '^/api': ''
                },
            },

        }
    },
    chainWebpack: config => {
        config.when(process.env.NODE_ENV === 'production', config => {
            config.entry('app').clear().add('./src/main.js')

            config.set('externals', {
                vue: 'Vue',
                'vue-router': 'VueRouter',
                axios: 'axios'
            })
        })

        config.when(process.env.NODE_ENV === 'development', config => {
            config.entry('app').clear().add('./src/main.js')
        })
    }
}