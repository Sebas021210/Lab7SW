const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist_webpack'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        test: /\.scss$/i,
        test: /\.(png|jpe?g|gif)$/i,
        use: ["style-loader", "css-loader", "sass-loader", "file-loader"],
      },
    ],
  },
};
