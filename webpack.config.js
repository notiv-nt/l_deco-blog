
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const svgSprite = require('./webpack_loaders/svg-sprite');


svgSprite({
    source: path.join(__dirname, './source/sprite/'),
    dest: [
        path.join(__dirname, './public/'),
        path.join(__dirname, './source/')
    ],
    prefix: 'svg-'
});


module.exports = {
  context: path.resolve('source'),

  watchOptions: {
    poll: true
  },

  devtool: 'cheap-source-map',

  output: {
    path: path.resolve('public'),
    publicPath: './',
    filename: 'assets/js/[name].js',
    chunkFilename: 'assets/js/[name].[id].js',
    libraryTarget: 'this'
  },

  resolve: {
    root: path.resolve('source'),
    modulesDirectories: [
      'node_modules',
      'source/styles/'
    ],
    alias: {
      _components: path.join(__dirname, 'source', 'components'),
      _filters: path.join(__dirname, 'source', 'filters'),
      _pages: path.join(__dirname, 'source', 'pages'),
      _styles: path.join(__dirname, 'source', 'styles'),
      config: path.join(__dirname, 'config', 'main.json'),
    }
  },

  devServer: {
    noInfo: true,
    historyApiFallback: true,
    contentBase: [ path.resolve('source'), path.resolve('public') ]
  },

  postcss: function() {
    return [
      autoprefixer({ browsers: [ '> 1%', 'ie 10-11' ], cascade: true })
    ];
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.styl$/,
        loader: 'style!css?camelCase&localIdentName=[name]__[local]___[hash:base64:5]!postcss!stylus?resolve url',
        exclude: [
          /boot\.styl$/
        ]
      },
      {
        test: /boot\.styl$/,
        loader: ExtractTextPlugin.extract('style', 'css!stylus')
      },
      {
        test: /source.*\.js$/,
        loader: 'babel?presets[]=es2015&cacheDirectory'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.pug$/,
        loader: 'pug?pretty=true&root=' + path.join(__dirname, 'source')
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'view/index.pug',
      filename: 'index.html',
      inject: false
    }),

    new TransferWebpackPlugin([
      { from: 'img', to: 'assets/img' }
    ]),

    new webpack.ProvidePlugin({
      Vue: path.resolve(__dirname, 'node_modules/vue/dist/vue.min.js'),
      $: 'jquery',
      jQuery: 'jquery'
    }),

    new ExtractTextPlugin('assets/css/[name].css')
  ],

  entry: {
    main: 'js/main.js',
    boot: 'styles/boot.styl'
  }
};
