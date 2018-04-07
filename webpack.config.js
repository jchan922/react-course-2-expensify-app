/*
WEBPACK CONFIG
    entry -> output final bundle file
*/

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';              // to minify js/css for production
    const CSSExtract = new ExtractTextPlugin('styles.css'); // extract styles into their own single style file

    return {
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
                test: /\.s?css$/,                           // set up multiple loaders for css inside of webpack
                use: CSSExtract.extract({                   // extract styles into their own single style file  
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',      // to see source js file for debug
        devServer: {
            contentBase: path.join(__dirname, 'public'),    // path to build for dev server, not production
            historyApiFallback: true,                       // to enable client side routing w/ react-router and serve up index.html on 404s
        }
    }
}

