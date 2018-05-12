module.exports = {
    devtool:'eval-source-map',
    entry:  __dirname + "/app/main.js",//唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devServer: {
        contentBase:"./public",
        historyApiFallback:true,
        inline:true,
        port:8081
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    // options: {
                    //     presets: [
                    //         "env", "react"
                    //     ]
                    // }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true, // 指定启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    }, {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    }
    // ,plugins: [
    //     new webpack.BannerPlugin('个人学习，严禁商业')
    // ]

}
