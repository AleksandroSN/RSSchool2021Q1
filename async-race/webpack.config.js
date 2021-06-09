const path = require('path');
// const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = ({ development }) => ({
  mode: development ? 'development' : 'production',
  devtool: development ? 'source-map' : 'eval',
  devServer: {
    historyApiFallback: {
      index: '/index.html',
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Match match game',
      template: './index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new ESLintPlugin({ extensions: ['ts', 'js'] }),
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
    // new CopyPlugin({
    //   patterns: [{ from: './assets/img/kitty', to: './assets/img/kitty/[name][ext]' },
    //   { from: './assets/img/computer', to: './assets/img/computer/[name][ext]' },
    //   { from: './assets/img/sport', to: './assets/img/sport/[name][ext]' },
    // {from: '../public'}],
    // }),
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
});
