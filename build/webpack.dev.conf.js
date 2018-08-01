const path = require('path');
const baseConf = require('./webpack.base.conf');
const merge = require('webpack-merge');
const Webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(baseConf, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        proxy: {
            "/api": {
                target: "http://localhost:8090",
                pathRewrite: {'^/api' : ''}
            }
        }
    },
    plugins: [
        new HtmlPlugin({
            title: 'IDCIM',
            template: path.resolve(__dirname, '../index.html')
        }),
        new Webpack.NamedModulesPlugin(),
        new Webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }
            })
        }]
    }
});