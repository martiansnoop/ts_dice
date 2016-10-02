var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

module.exports = {
  entry: {
      app: "./src/ts/index.tsx",
      vendor: ["react", "react-dom", "redux", "react-redux", "lodash"]
  },
  output: {
    filename: "build/bundle.js"
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".js", ".tsx"]
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React Test",
      template: "src/index.html",
      filename: "build/index.html",
      inject: "body"
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        filename: "build/vendor.bundle.js"
    })
  ],
  devtool: "source-map"
};
