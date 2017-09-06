var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'react', 'lodash', 'react-dom', 'redux', 'react-router', 
  'axios', 'immutable', 'react-apollo', 'graphql-tag'
  ];

const BUNDLE = [
  'babel-polyfill',
  'react-hot-loader/patch',
  'webpack-hot-middleware/client',
  './src/components/app.jsx'
];

module.exports = {
  entry: {
    bundle: BUNDLE,
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/dist/'
  },
  devServer: {
    hot: true,
    inline: true,
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    historyApiFallback: true,
    stats: {
      colors: true,
      chunks: false,
      'errors-only': true
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: ['react-hot-loader/webpack'],
        include: path.join(__dirname, 'src')
      },
      {
        use: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        test: /\.scss$/
      },
      {
        use: [
          'style-loader', 
          { 
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName:"[name]--[local]--[hash:base64:8]"
            }
          }, 
          'postcss-loader'
      ],
        test: /\.css$/
      },
      {
        use: "file-loader?name=./images/[name].[ext]",
        test: /\.jpg$|\.gif$|.png$/i
      },
      {
        use: "file-loader?name=./fonts/[name].[ext]",
        test: /\.otf$|\.ttf$/i
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};