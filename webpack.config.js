var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/ts/App.tsx',
  output: {
    filename: 'build/bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Test',
      template: 'src/index.html',
      filename: 'build/index.html',
      inject: 'body'
    })
  ]
};
