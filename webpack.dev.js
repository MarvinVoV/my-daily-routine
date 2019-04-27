const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    // devtool: 'inline-source-map',
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        overlay: true,
        port: 3000,
    }
});