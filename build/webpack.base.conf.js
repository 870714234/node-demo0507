const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        action: './src/action.js'
    },
    plugins: [
        new CleanWebpackPlugin(['../dist']),
        new HtmlWebpackPlugin({
            title: 'IDCIM',
            template: './src/template.html'
        }),
        new ExtractTextPlugin('styles.css')
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|ttf|eot|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};