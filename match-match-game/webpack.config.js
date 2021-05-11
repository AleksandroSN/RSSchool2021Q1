const path = require('path');
const CopyPlugin = require('copy-webpack-plugin'); // для копирования файлов
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // очищение папки перед сборкой
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin'); // минификация картинок
const HtmlWebpackPlugin = require('html-webpack-plugin'); // основной плагин для работы с HTML-файлами
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // вывод отдельного css файла
const ESLintPlugin = require('eslint-webpack-plugin');

// need add prod variable or prod.webback

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    compress: true,
    open: true,
    port: 8080,
  },

  context: path.resolve(__dirname, 'src'),

  entry: {
    app: '/app.ts',
  },

  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'js/[name].js',
    assetModuleFilename: 'assets/[name].[ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Match match game',
      filename: '[name].html',
      inject: 'body',
    }),
    new ESLintPlugin({ extensions: ['ts', 'js'] }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['jpegtran', { quality: 75, progressive: true }],
          ['optipng', { optimizationLevel: 3 }],
        ],
      },
    }),
    new CopyPlugin({
      patterns: [{ from: 'public', to: 'assets/[path]/[name].[ext]' }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss|css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
};
