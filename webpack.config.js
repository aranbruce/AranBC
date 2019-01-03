// VARIABLES
var WebpackPwaManifest = require('webpack-pwa-manifest');

// CONSTANTS
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {GenerateSW} = require('workbox-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: "production",
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
        new WebpackPwaManifest({
            filename: "manifest.json",
            name: 'Aran Bruce-Caddick',
            short_name: 'AranBC',
            description: 'Aran Bruce-Caddick\'s Personal Website',
            start_url: "/",
            background_color: '#ffffff',
            display: 'standalone',
            ios: {
                'apple-mobile-web-app-title': 'Aran Bruce-Caddick',
                'apple-mobile-web-app-status-bar-style': 'white'
            },
            icons: [
                {
                    src: path.resolve("src/images/launcher-icons/launcher-icon-512x512.png"),
                    sizes: [48, 96, 128, 192, 256, 384, 512], // multiple sizes
                    destination: path.join("/images/launcher-icons"),
                },
                {
                    src: path.resolve("src/images/apple-touch-icon.png"),
                    size: 150,
                    destination: path.join("/images"),
                    ios: true,
                },
                {
                    src: path.resolve("src/images/splash-screens/splash-launch-640x1136.png"),
                    destination: path.join("/images/splash-screens"),
                    size: 1336,
                    ios: "startup",
                },
                {
                    src: path.resolve("src/images/splash-screens/splash-launch-750x1294.png"),
                    destination: path.join("/images/splash-screens"),
                    size: 1294,
                    ios: "startup"
                },
                {
                    src: path.resolve("src/images/splash-screens/splash-launch-1242x2148.png"),
                    destination: path.join("/images/splash-screens"),
                    size: 2148,
                    ios: "startup"
                },
                {
                    src: path.resolve("src/images/splash-screens/splash-launch-1125x2436.png"),
                    destination: path.join("/images/splash-screens"),
                    size: 2436,
                    ios: "startup"
                },
                {
                    src: path.resolve("src/images/splash-screens/splash-launch-1242x2688.png"),
                    destination: path.join("/images/splash-screens"),
                    size: 2688,
                    ios: "startup"
                },
                {
                    src: path.resolve("src/images/splash-screens/splash-launch-1536x2048.png"),
                    destination: path.join("/images/splash-screens"),
                    size: 2048,
                    ios: "startup"
                },
                {
                    src: path.resolve("src/images/splash-screens/splash-launch-1668x2224.png"),
                    destination: path.join("/images/splash-screens"),
                    size: 2224,
                    ios: "startup"
                },
                {
                    src: path.resolve("src/images/splash-screens/splash-launch-2048x2732.png"),
                    destination: path.join("/images/splash-screens"),
                    size: 2732,
                    ios: "startup"
                },
            ]
        }),
        new CleanWebpackPlugin(
            'dist', 
            { exclude: ['.htaccess', 'favicon.png', 'sitemap.xml'], }
        ),
    ]
}