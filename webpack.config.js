const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const pkg = require('./package.json');

const banner = '@module ' + pkg.name + '\n' +
    '@description ' + pkg.description + '\n' +
    '@version v' + pkg.version + '\n' +
    '@link ' + pkg.homepage + '\n' +
    '@license MIT License, http://www.opensource.org/licenses/MIT';

module.exports = {
    entry: {
        'page-title': './src/page-title.ts',
        'page-title.min': './src/page-title.ts'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        hotUpdateChunkFilename: '.hot/hot-update.js',
        hotUpdateMainFilename: '.hot/hot-update.json'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, '/demo'),
        hot: true,
        compress: true,
        watchContentBase: true,
        port: 9000
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new UglifyJSPlugin({
            include: /\.min\.js$/,
            minimize: true,
            sourceMap: true
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].js.map',
            exclude: ['page-title.js']
        }),
        new webpack.BannerPlugin(banner),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};
