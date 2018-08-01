const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: {
        index: ['./src/main.js']
    },
    plugins: [
        new ExtractTextPlugin('[name].bundle.css'),
        new VueLoaderPlugin()
        // new CopyWebpackPlugin(['./src/threeD/optimer_bold.typeface.json'])
    ],
    output: {
        filename: '[name].bundle.js',
        // path: path.resolve(__dirname, '../../resources/static')
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 20480
                    }
                }
            },
            {
                test: /\.(woff|woff2|ttf|eot|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.vue']
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};