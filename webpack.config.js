var path = require('path');
var webpack = require('webpack');

module.exports = {
    name: 'jquery-maxlength',
    entry: './src/jquery.maxlength.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].js',
        publicPath: '/',
        sourceMapFilename: '[name].[hash].js.map',
        chunkFilename: '[id].chunk.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: 'source-map-loader',
            include: path.join(__dirname, 'src')
        }],
        loaders: [{
            test: /\.js?$/,
            exclude: [
                /node_modules/,
            ],
            loader: 'babel'
        }]
    }
}