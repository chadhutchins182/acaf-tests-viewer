const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    entry: './src/acaf.js',
    output: {
        filename: 'acaf.js',
        path: path.resolve(__dirname, 'dist'),
    }
});

