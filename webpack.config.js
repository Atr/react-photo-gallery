const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: './client/index.js',
  },
  plugins: [
    new CleanWebpackPlugin(['client/dist']),
    new HtmlWebpackPlugin({
      template: './client/src/index.template.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    })
  ],
  output: {
    filename: '[name].bundle.[hash].js',
    path: path.resolve(__dirname, 'client/dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'] 
        },
      },
      {
        test:/\.(s*)css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'images/[hash]-[name].[ext]'  
          }
        }]
      },
      {
        test: /\.svg$/,  
        use: [{
          loader: 'url-loader',
          options: { 
            limit: 1000000,
            name: '/images/[hash]-[name].[ext]'
          } 
        }]
      },
    ]
  }
};