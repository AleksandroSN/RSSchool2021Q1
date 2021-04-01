const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // основной плагин для работы с HTML-файлами
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // очищение папки перед сборкой
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // вывод отдельного css файла
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin'); //оптимизация и минификация css файла
const CopyPlugin = require('copy-webpack-plugin'); // для копирования файлов
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin'); // минификация картинок
const TerserPlugin = require('terser-webpack-plugin'); //минификация JS

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserPlugin(),
    ];
  }

  return config;
};

const jsLoaders = () => {
  if (isDev) {
    const loaders = [
      {
        loader: 'eslint-loader',
      },
    ];
    return loaders;
  }
};

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    main: '/js/app.js',
  },

  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: '[name].bundle.js',
  },
  optimization: optimization(),
  devtool: isDev ? 'source-map' : 'eval',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Online-Zoo',
      template: './index.html',
    }),
    new HtmlWebpackPlugin({
      title: '404',
      template: './404.html',
      filename: '404.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyPlugin({
      patterns: [{ from: './assets/img/**', to: './assets/img/[name][ext]' }],
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['mozjpeg', { quality: 75, progressive: true }],
          ['optipng', { optimizationLevel: 3 }],
        ],
      },
    }),
  ],
  module: {
    rules: [
      //SVG
      {
        test: /\.svg$/,
        use: ['svg-sprite-loader', 'svgo-loader'],
      },
      //Styles
      {
        test: /\.scss|css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      //Fonts
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: './assets/fonts/[name].[ext]',
          },
        },
      },
      //JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
    ],
  },
};
