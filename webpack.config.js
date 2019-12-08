const path = require('path')

const webpack = require('webpack')

const htmlWebpackPlugin = require('html-webpack-plugin')

const vueloaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: 'bundle.js'
    },

    devServer: {

        open: true,
        port: 8181,
        hot: true,
        contentBase: 'src',
        proxy: {
            '/api': {
                target: 'http://localhost:8080', //API服务器的地址
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }

            },
           // '/ws':{
           //      target:'ws://localhost:8080',
           //      changeOrigin:true,
           //      pathRewrite:{
           //          '~/ws':''
           //      }
           // }

        }
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),       //热更新插件    html-webpack-plugin
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new vueloaderPlugin()                      //vue 加载器

    ],
    //如果发现要处理的文件不是js文件就会去该文件按中找，查看是否有第三方加载器去处理
    module: {            //该模块用于加载第三方模块加载器
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},       //加载Css文件  先执行  npm i style-loader css-loader -D
            {test: /\.vue$/, use: ['vue-loader']},             //加载vue        npm i vue-loader   vue-template-complier   -D
            {test: /\.(jpg|png|jif)$/, use: ['url-loader']},       //处理url资源,小图片不使用base64编码  npm url-loader -D
            {test: /\.(ttf|woff|woff2|svg|eot)$/, use: ['url-loader']},           //处理字体文件
            //处理es6 及更高的语法，使其转化为低级的语法
            //1、安装 babel-core babel-loader babel-plugin--transform-runtime      //转换器
            //2、安装 babel-preset-env babel-preset-stage-0                       // 字典
            //3、配置 loader   {test:/\.js$/,use:['babel-loader'],exclude:/node_modules/} 排除掉node_modules中的js文件
            //4、创建.babelrc 文件 并配置  { preset:['env','stage-0'] , plugins:['transform-runtime']  }
            {test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/}

        ]


    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': path.resolve('src'),
            // 'src':path.resolve('../src')
        }
    }
}
