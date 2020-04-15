const path = require('path');

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
