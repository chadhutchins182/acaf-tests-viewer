const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('@bundle-analyzer/webpack-plugin')
var dotenv = require('dotenv').config({ path: __dirname + '/.env' });
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: [
            path.resolve(__dirname, 'dist')
        ],
        compress: true,
        port: 9000
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": dotenv.parsed
        }),
        new BundleAnalyzerPlugin({ token: process.env.BUNDLE_ANALYZER_TOKEN })
    ]
});