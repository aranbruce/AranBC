// VARIABLES

// CONSTANTS
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {GenerateSW} = require('workbox-webpack-plugin');

module.exports = {
    entry: "./src/scripts/app.js",
    output: {
        path: __dirname + "/dist",
        filename: "scripts/scripts.bundle.js"
    },

    devServer: {
        compress: true,
        port: 8000,
        watchOptions: {
          poll: true,
          ignored: /node_modules/
        }
    },

    module: {
        rules: [
            // Include pug-loader to process the pug files
            {
                test: /\.pug$/,
                use: 'pug-loader'
            },
            // Include MiniCssExtractPluginloaders to process our css files
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                        // you can specify a publicPath here
                        // by default it use publicPath in webpackOptions.output
                        output: __dirname + "/dist"
                        }
                    },
                    "css-loader"
                ],
            },
             // Include file-loader to process our fonts
            {
                include: __dirname + "/src/fonts/",
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        // useRelativePath: true,
                        outputPath: "/fonts",
                        name: "[name].[ext]",
                        
                    }
                }]
            },
            // Include file-loader to process our images
            {
                include: __dirname + "/src/images/",
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        // useRelativePath: true,
                        outputPath: "/images",
                        name: "[name].[ext]",
                    }
                }]
            }
        ]
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/pages/index.pug",
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: "citysnapp.html",
            template: "./src/pages/citysnapp.pug",
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: "thankyou.html",
            template: "./src/pages/thankyou.pug",
            inject: false
        }),
        new MiniCssExtractPlugin({
            filename: "css/styles.bundle.css"
        }),
        new GenerateSW({
            swDest: "sw.js"
        }),
    ]
}