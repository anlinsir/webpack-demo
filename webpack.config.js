const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    entry:  {
        app:'./app/index.js',
        print: './app/print.js'
    }, // 入口文件
    output: {
        path: path.resolve(__dirname, './build'), // 必须使用绝对地址，输出文件夹
        /* filename: "bundle.js", */ // 打包后输出文件的文件名
        filename: '[name].bundle.js',
        publicPath: './' 
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            favicon:'static/default-icon.png',
            scriptLoading:'defer',
            meta: {
                name:"anlinsir"
            },
            base:true,
            minify:false,
            hash:true,
            cache:false,
            bodyHtmlSnippet:'<span>a</span>',
            window: {
                env: {
                    apiHost: 'http://myapi.com/api/v1'
                }
            },
            links:[
                'https://fonts.googleapis.com/css?family=Roboto',
                {
                    href: '/apple-touch-icon.png',
                    rel: 'apple-touch-icon',
                    sizes: '180x180'
                },
            ],
            scripts: [
                'http://example.com/somescript.js',
                {
                    src: '/myModule.js',
                    type: 'module'
                }
            ],

        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}
