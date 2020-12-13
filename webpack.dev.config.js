const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('@bundle-analyzer/webpack-plugin')
var dotenv = require('dotenv').config({ path: __dirname + '/.env' });
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const bat = '"' + process.env.BUNDLE_ANALYZER_TOKEN + '"';

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: [
            path.resolve('./dist')
        ],
        port: 9000,
    },
    plugins: [
        new BundleAnalyzerPlugin({ token: bat }),
    ]
});