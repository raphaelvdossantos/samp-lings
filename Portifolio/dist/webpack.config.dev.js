"use strict";

var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        pathRewrite: {
          '^api': ''
        }
      }
    }
  },
  watchOptions: {
    ignored: '/node_modules/'
  },
  experiments: {
    topLevelAwait: true
  }
};