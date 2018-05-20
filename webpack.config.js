var webpack = require('webpack');
module.exports = {
  entry: './src/app.js',        //默认配置：./src/index.js
  output: {
      path: __dirname + '/build', //默认配置：/dist
      filename: "bundle.js"       //默认配置：main.js
  },
  module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
              plugins: ['transform-runtime'],
              presets: ['es2015', 'react', 'stage-2']
          }
      }, {
          test: /\.css$/,
          loader: "style-loader!css-loader"
      }]
  }
};