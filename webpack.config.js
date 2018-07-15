var webpack = require('webpack');
module.exports = {
  mode: 'production',
  entry: './src/app.js',        //默认配置：./src/index.js
  output: {
      path: __dirname + '/build', //默认配置：/dist
      filename: "bundle.js"       //默认配置：main.js
      // filename: '[name].bundle.js'
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
  },
  //  plugins: {
  //   new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js')
  // }
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // }
};