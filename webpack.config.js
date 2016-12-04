'use strict';

const path = require('path');

const configuration = {
  context: __dirname,
  entry: './client.js',
  output: {
    path: __dirname,
    filename: 'build.js'
  },
  resolve: {
    extensions: [ '', '.js', '.jsx', '.json' ]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = configuration;
