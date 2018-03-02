import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
  devtool: 'source-map',
  entry: {
    index: path.resolve(__dirname, './src/index'),
    environment: path.resolve(__dirname, './src/environment'),
    caring: path.resolve(__dirname, './src/caring'),
    default: path.resolve(__dirname, './src/default'),
    corporate: path.resolve(__dirname, './src/corporate'),
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'), //short for distribution
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    // Generate an external css file with a hash in the filename
    new ExtractTextPlugin('[name].[contenthash].css'),
    // Hash the files using MD5 so that thier names when the content changes.
    new WebpackMd5Hash(),
    // Use CommonsChunckPlugin to create a separate bundle
    // of vendor libraries so that they're cached separately
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    }),
    // Create HTML file that includes reference to bundled JS.
    // new HtmlWebpackPlugin({
    //   template: 'src/index.html',
    //   minify:{
    //     removeComments: true,
    //     collapseWhitespace: true,
    //     removeRedundantAttributes: true,
    //     useShortDoctype: true,
    //     removeEmptyAttributes: true,
    //     removeStyleLinkTypeAttributes: true,
    //     keepClosingSlash: true,
    //     minifyJS: true,
    //     minifyCSS: true,
    //     minifyURLs:true
    //   },
    //   inject: true,
    //   // Properties you define here are available in index.html
    //   // using htmlWebpackPlugin.options.varName
    //   // trackJSToken: '09be57fc323b4462b67321f506cc4909'
    // }),
    new HtmlWebpackPlugin({
      template: './src/pug/index.pug',
      filename: 'index.html',
      chunks: ['index', 'common'],
      minify:{
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs:true
      },
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/theme-default.pug',
      filename: 'theme-default.html',
      chunks: ['default', 'common'],
      minify:{
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs:true
      },
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/theme-caring.pug',
      filename: 'theme-caring.html',
      chunks: ['caring', 'common']
      ,minify:{
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs:true
      },
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/theme-corporate.pug',
      filename: 'theme-corporate.html',
      chunks: ['corporate', 'common'],
      minify:{
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs:true
      },
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/theme-environment.pug',
      filename: 'theme-environment.html',
      chunks: ['environment', 'common'],
      minify:{
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs:true
      },
      inject: true
    }),
    // Minify JS
    new webpack.optimize.UglifyJsPlugin({sourceMap: true}),
    new CopyWebpackPlugin([{from:"./src/assets", to: './'}])
  ],
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:[ {loader:'css-loader', options: {minimize: true}}, 'less-loader' ],

        })
      },
      {
        test: /\.pug$/,
        use: [{ loader: 'pug-loader' }]
      }
    ]
  }
}
