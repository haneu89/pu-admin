const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devServer: {
    port: 8000
  },
  entry: ['./resources/js/app.js', './resources/sass/app.scss'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/app.js'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        loader: "raw-loader"
     }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "css/app.css" })
  ]
};