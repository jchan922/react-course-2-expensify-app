/*
WEBPACK CONFIG
    entry -> output final bundle file
*/

const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {                                           // path to build for production bundle.js
        path: path.join(__dirname, 'public'),           
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',                     // transpiles ES6 in Webpack given presets in .babelrc
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.s?css$/,                            // set up multiple loaders for css inside of webpack
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',            // to see source js file for debug
    devServer: {
        contentBase: path.join(__dirname, 'public'),    // path to build for dev server, not production
        historyApiFallback: true,                       // to enable client side routing and return index.html on 404s w/ react-router 
    }
};

