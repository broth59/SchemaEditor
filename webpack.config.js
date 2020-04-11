const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    name: 'SchemaEditor',
    mode: 'development',
    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            '@src': path.resolve(__dirname, 'src'),
        },
    },

    //Entry file for Bundling
    entry: ['./index.tsx'],
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                loader: 'awesome-typescript-loader',
                options: {
                    useBabel: true,
                    babelCore: '@babel/core',

                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: {
                                    browsers: ['> 5% in KR', 'last 2 chrome verssion '],
                                },
                                debug: true,
                            },
                        ],
                        ['@babel/prest-react'],
                    ],
                    plugins: ['react-hot-loader/babel'],
                },
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            filename: path.join('index.html'),
        }),
    ],

    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        open: true,
    },
}
