const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/acaf.js',
    output: {
        filename: 'acaf.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
            Button: 'exports-loader?Button!bootstrap/js/dist/button',
            Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
            Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
            Util: 'exports-loader?Util!bootstrap/js/dist/util'
        }),
    ]

};