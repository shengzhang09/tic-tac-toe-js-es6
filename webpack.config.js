var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/app/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                  {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                  }
                ]
            },
            {
              test: /\.css$/,
              use: [
                {
                  loader: 'style-loader'
                },
                {
                  loader: 'css-loader'
                },
              ]
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
