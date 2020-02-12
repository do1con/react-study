
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",

  resolve: {
    extensions: [".js", ".jsx"]
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      loaders: "babel-loader",
      exclude: /node-modules/
    }]
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },

  plugins: [
    new HtmlWebpackPlugin({
      // index.html에 output에서 만들어진 bundle.js를 적용하여, dist에 새로운 html 파일 생성
      template: `./public/index.html`
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, "dist"), // 이 경로에 있는 파일이 변경될 때 번들을 다시 컴파일
    compress: true,
    port: 7547
  },
};