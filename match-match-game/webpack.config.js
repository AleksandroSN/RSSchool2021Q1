const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

// need add prod variable or prod.webback

module.exports = {
  devtool: 'source-map',
  devServer: {
    historyApiFallback: {
      index: '/app.html'
    },
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
    assetModuleFilename: '[path][name][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Match match game',
      template: './app.html',
      filename: 'app.html',
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
      patterns: [{ from: './assets/img/kitty', to: './assets/img/kitty/[name][ext]' }],
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
