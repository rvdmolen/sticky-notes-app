
const webpack = require('webpack');
const path = require('path');

let config = {
    entry: './src/scripts/main.js',
    output: {
        path: path.resolve(__dirname, './dist'), // ouput path
        filename: 'output.js' // output filename
    },
    module: {
        rules: []
    },
    plugins: [],
    devServer: {
        contentBase: './src',
        historyApiFallback: true,
        inline: true,
        open: true,
        watchContentBase: true
    },
    devtool: 'eval-source-map' // enable devtool for better debugging experience
}

module.exports = config;