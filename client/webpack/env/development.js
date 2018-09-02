const { resolve } = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const ForkTsChekerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

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
    new ForkTsChekerWebpackPlugin({
      // tslint: false,
      tsconfig: resolve(__dirname, '../../tsconfig.json'),
      checkSyntacticErrors: true,
      watch: ['../../src'],
    }),
  ],
});

module.exports = development;
