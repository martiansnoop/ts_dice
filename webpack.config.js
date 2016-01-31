var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

module.exports = {
  entry: {
      app: "./src/ts/App.tsx",
      vendor: ["react", "react-dom"]
  },
  output: {
    filename: "build/bundle.js"
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
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
    }),
    new webpack.ProvidePlugin({
      React: "react",
      ReactDOM: "react-dom"
    })
  ]
};
