const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
    },
    mode: "development",
    devServer: {
        static: './dist',
        hot: true,
        compress: true,
        open:true,
        port:8564,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                   loader: 'babel-loader',
                   options: {
                     presets: ['@babel/preset-env'],
                   },
                },
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            name: "index.html",
            inject: false,
            template: './dist/index.html',
        }),
    ],
    devtool: 'inline-source-map',
};