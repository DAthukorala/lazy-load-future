const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './scripts/app.js'),
        billing: path.resolve(__dirname, './scripts/billing-module/billing.module.js'),
        documents: path.resolve(__dirname, './scripts/documents-module/documents.module.js'),
        home: path.resolve(__dirname, './scripts/home-module/home.module.js'),
        labs: path.resolve(__dirname, './scripts/labs-module/labs.module.js'),
        locations: path.resolve(__dirname, './scripts/locations-module/locations.module.ts'),
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'ts-loader', exclude: /node_modules/ },
            { test: /\.ts?$/, use: 'ts-loader', exclude: /node_modules/ },
            { test: /\.html$/i, use: 'html-loader' }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, '/dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
        writeToDisk: true
    },
    optimization: {
        moduleIds: 'deterministic',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './scripts/index.template.html'),
            chunks: ['main'],
            filename: 'index.html', // output file
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};