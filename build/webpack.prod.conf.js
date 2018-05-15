var baseConf = require('./webpack.base.conf');
var merge = require('webpack-merge');

module.exports = merge(baseConf, {
    mode: 'production'
});