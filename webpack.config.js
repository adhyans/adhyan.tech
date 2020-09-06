const path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  entry: {
    build: './server/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/dist'),
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['babel-plugin-styled-components'],
          },
        },
      },
    ],
  },
};
