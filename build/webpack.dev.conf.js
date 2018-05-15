var baseConf = require('./webpack.base.conf');
var merge = require('webpack-merge');
var Webpack = require('webpack');

module.exports = merge(baseConf, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        hot: true
    },
    plugins: [
        new Webpack.NamedModulesPlugin(),
        new Webpack.HotModuleReplacementPlugin()
    ]
});