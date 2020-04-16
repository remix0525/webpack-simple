const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

// console.log("---------------------")
// console.log(path);
// console.log(__dirname);
// console.log(filename)
// console.log("---------------------")

module.exports = {
  // entry: './src/index.js',
  entry:{
    app:'./src/index.js',
    myPrint:'./src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:"我是插件测试",
      template:"src/index.html"
    })
  ],
  devtool:"inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
         ]
      }
    ]
}

};
