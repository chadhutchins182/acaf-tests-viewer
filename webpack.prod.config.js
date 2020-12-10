const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('@bundle-analyzer/webpack-plugin')
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


console.log("TEST ENV: "+JSON.stringify(process.env));

module.exports = merge(common, {
    mode: 'production',
    entry: './src/acaf.js',
    output: {
        filename: 'acaf.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new BundleAnalyzerPlugin({ token: process.env.BUNDLE_ANALYZER_TOKEN })
    ]
});

