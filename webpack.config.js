const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCss = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackInlineSVGPlugin = require("html-webpack-inline-svg-plugin")

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, "./src/main.js")
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle.js",
        assetModuleFilename: "assets/[name][ext]"
    },
    devServer: {
        static: {directory: path.join(__dirname, './dist')},
        open: true,
        hot: true,
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: "asset/resource"
            },
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
            //     use: [{
            //         loader: "url-loader",
            //         options: {
            //             limit: 50000,
            //             mimeType: 'application/font-otf',
            //             name: 'assets/fonts/[name][ext]'
            //         }
            //     }]
            // },
            {
                test: /\.svg$/,
                type: "asset/resource",
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
            {
                test: /\.(scss|css)$/i,
                use: [
                    MiniCss.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack App",
            template: "./src/index.html",
            filename: "index.html"
        }),
        new HtmlWebpackInlineSVGPlugin(),
        new CopyPlugin({
            patterns: [
                {from: './src/lang', to: './assets/lang'}
            ]
        }),
        new MiniCss({
            filename: 'styles.css'
        }),
    ],
}