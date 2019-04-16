// VARIABLES
var WebpackPwaManifest = require('webpack-pwa-manifest');

// CONSTANTS
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {GenerateSW} = require('workbox-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;

// sitemap paths
const sitemapPaths = [
    {
        path: '/',
        priority: '1',
        changeFreq: 'monthly'
    },
    {
        path: '/citysnapp',
        priority: '0.9',
        changeFreq: 'monthly'
    },
    {
        path: '/dynamo',
        priority: '0.9',
        changeFreq: 'monthly'
    },
    {
        path: '/koodoo',
        priority: '0.9',
        changeFreq: 'monthly'
    },
    {
        path: '/thankyou',
        priority: '0.3',
        changeFreq: 'monthly'
    },
]

module.exports = {
    entry: {
        main: "./src/scripts/index.js"
    },
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: "scripts/main.js"
    },

    module: {
        rules: [
            // Use babel on javascript files
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
              },
            // Include pug-loader to process the pug files
            {
                test: /\.pug$/,
                use: 'pug-loader'
            },
            // Include style-loader, MiniCssExtractPluginloaders, and css-loader to process our css files
            {
                test: /\.(css|scss|sass)$/,
                use:  [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
             // Include file-loader to process our fonts
            {
                include: __dirname + "/src/fonts/",
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        useRelativePath: true,
                        outputPath: "fonts/",
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
                        useRelativePath: true,
                        outputPath: "images/",
                        name: "[name].[ext]",
                    }
                }]
            }
        ]
    },
    
    plugins: [
        new MiniCssExtractPlugin({
            filename: "main.css"
        }),
        new HtmlWebpackPlugin({
            title: "AranBC Website",
            minify: {
                collapseWhiteSpace: true
            },
            filename: "index.html",
            template: "./src/pages/index.pug",
            favicon: "./src/images/favicon.png"
        }),
        new HtmlWebpackPlugin({
            minify: {
                collapseWhiteSpace: true
            },
            filename: "citysnapp",
            template: "./src/pages/citysnapp.pug",
            favicon: "./src/images/favicon.png"
        }),
        new HtmlWebpackPlugin({
            minify: {
                collapseWhiteSpace: true
            },
            filename: "dynamo",
            template: "./src/pages/dynamo.pug",
            favicon: "./src/images/favicon.png"
        }),
        new HtmlWebpackPlugin({
            minify: {
                collapseWhiteSpace: true
            },
            filename: "koodoo",
            template: "./src/pages/koodoo.pug",
            favicon: "./src/images/favicon.png"
        }),
        new HtmlWebpackPlugin({
            minify: {
                collapseWhiteSpace: true
            },
            filename: "thankyou",
            template: "./src/pages/thankyou.pug",
            favicon: "./src/images/favicon.png"
        }),
        new HtmlWebpackPlugin({
            minify: {
                collapseWhiteSpace: true
            },
            filename: "404",
            template: "./src/pages/404.pug",
            favicon: "./src/images/favicon.png"
        }),

        new CleanWebpackPlugin({
            dry: false,
            verbose: true,
            cleanOnceBeforeBuildPatterns: ['**/*'],

        }),

        new SitemapPlugin(
            'https://www.aranbc.com',
            sitemapPaths,
            {
                filename: 'sitemap.xml',
                lastMod: true,
                changeFreq: 'monthly',
                skipGzip: true
            }
        ),
        new GenerateSW({
            swDest: "sw.js"
        }),
        new WebpackPwaManifest({
            filename: 'manifest.json',
            name: 'Aran Bruce-Caddick',
            short_name: 'AranBC',
            description: 'Aran Bruce-Caddick\'s Personal Website',
            start_url: '/',
            background_color: '#ffffff',
            display: 'standalone',
            inject: true,
            theme_color: '#ffffff',
            orientation: 'portrait',
            ios: {
                'apple-mobile-web-app-title': 'Aran Bruce-Caddick',
                'apple-mobile-web-app-status-bar-style': 'white'
            },
            icons: [
                {
                    src: path.resolve("src/images/launcher-icons/launcher-icon-512x512.png"),
                    sizes: [48, 96, 128, 192, 256, 384, 512], // multiple sizes
                    destination: path.join("images/launcher-icons/"),
                },
                {
                    src: path.resolve("src/images/apple-touch-icon.png"),
                    size: 150,
                    destination: path.join("images/"),
                    ios: true,
                },
                {
                    src: path.resolve("src/images/splash-screens/splash-launch-640x1136.png"),
                    destination: path.join("images/splash-screens/"),
                    size: 1336,
                    ios: "startup",
                },
                {
                    src: path.resolve("src/images/splash-screens/splash-launch-750x1294.png"),
                    destination: path.join("images/splash-screens/"),
                    size: 1294,
                    ios: "startup"
                },
                {
                    src: path.resolve("src/images/splash-screens/splash-launch-1242x2148.png"),
                    destination: path.join("images/splash-screens/"),
                    size: 2148,
                    ios: "startup"
                },
                {
                    src: path.resolve("src/images/splash-screens/splash-launch-1125x2436.png"),
                    destination: path.join("images/splash-screens/"),
                    size: 2436,
                    ios: "startup"
                },
                {
                    src: path.resolve("src/images/splash-screens/splash-launch-1242x2688.png"),
                    destination: path.join("images/splash-screens/"),
                    size: 2688,
                    ios: "startup"
                },
                {
                    src: path.resolve("src/images/splash-screens/splash-launch-1536x2048.png"),
                    destination: path.join("images/splash-screens/"),
                    size: 2048,
                    ios: "startup"
                },
                {
                    src: path.resolve("src/images/splash-screens/splash-launch-1668x2224.png"),
                    destination: path.join("images/splash-screens/"),
                    size: 2224,
                    ios: "startup"
                },
                {
                    src: path.resolve("src/images/splash-screens/splash-launch-2048x2732.png"),
                    destination: path.join("images/splash-screens/"),
                    size: 2732,
                    ios: "startup"
                },
            ]
        })
    ]
}