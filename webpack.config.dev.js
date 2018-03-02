import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export default {
  devtool: 'inline-source-map',
  stats: 'normal',
  entry: {
    index: path.resolve(__dirname, './src/index'),
    environment: path.resolve(__dirname, './src/environment'),
    caring: path.resolve(__dirname, './src/caring'),
    default: path.resolve(__dirname, './src/default'),
    corporate: path.resolve(__dirname, './src/corporate'),
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?mimetype=image/svg+xml'
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?mimetype=application/font-woff'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?mimetype=application/octet-stream'
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.pug$/,
        use: [{ loader: 'pug-loader' }]
      }
    ]
  },
  plugins: [
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: './src/pug/index.pug',
      filename: 'index.html',
      chunks: ['index', 'common']
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/theme-default.pug',
      filename: 'theme-default.html',
      chunks: ['default', 'common']
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/theme-caring.pug',
      filename: 'theme-caring.html',
      chunks: ['caring', 'common']
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/theme-corporate.pug',
      filename: 'theme-corporate.html',
      chunks: ['corporate', 'common']
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/theme-environment.pug',
      filename: 'theme-environment.html',
      chunks: ['environment', 'common']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    })
  ]
};
