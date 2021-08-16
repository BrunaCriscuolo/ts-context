const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.join(__dirname, 'public', 'build'),
    publicPath: path.join(__dirname, 'public', 'build'),
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: path.join(__dirname, 'public', 'build'),
    writeToDisk: true,
    historyApiFallback: true,
    port: 3000,
    open: true
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.(png|jpe?g|gif|svg)/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: path.join(__dirname, 'public', 'build', 'assets'),
            publicPath: path.join(__dirname, 'public', 'build', 'assets'),
          }
        }
      ]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv()
  ]
};