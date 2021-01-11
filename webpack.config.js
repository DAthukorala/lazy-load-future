const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
    entry: {
        app: './scripts/app.js',
        billing: './scripts/billing-module/billing.module.js',
        documents: './scripts/documents-module/documents.module.js',
        home: './scripts/home-module/home.module.js',
        labs: './scripts/labs-module/labs.module.js',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/build'
    },
    mode: 'development',
    module: {
        rules: [{
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './scripts/index.html'
        })
    ],
    devtool: "inline-source-map"
};