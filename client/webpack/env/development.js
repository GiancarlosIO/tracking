const { resolve } = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

const shared = require('./shared');
const { devServerConfig } = require('../configuration');

const development = merge(shared, {
  devServer: devServerConfig,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackBuildNotifierPlugin({
      title: 'Crehana Webpack Build',
      // logo: resolve('./img/favicon.png'),
      suppressSuccess: false,
    }),
  ],
});

module.exports = development;
