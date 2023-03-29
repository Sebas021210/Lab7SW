const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
  entry: {
    page1: './src/pages/page1/page1.js',
    page2: './src/pages/page2/page2.js',
    page3: './src/pages/page3/page3.js',
    page4: './src/pages/page4/page4.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist_webpack'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader,
          'css-loader', 
          'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: '/src/imagenes/',
                publicPath: '../src/imgenes/'
            }
          }
        ] 
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
        filename: 'index.html',
        template: './src/pages/page1/index.html',
        chuncks: ['page1']
    }),

    new htmlWebpackPlugin({
        filename: 'libros-populares.html',
        template: './src/pages/page2/libros-populares.html',
        chuncks: ['page2']
    }),

    new htmlWebpackPlugin({
        filename: 'nuevos-lanzamientos.html',
        template: './src/pages/page3/nuevos-lanzamientos.html',
        chuncks: ['page3']
    }),

    new htmlWebpackPlugin({
        filename: 'inicio.html',
        template: './src/pages/page4/inicio.html',
        chuncks: ['page4']
    }),

    new MiniCssExtractPlugin({
        filename: '[name].css',
    }),
  ]
};
