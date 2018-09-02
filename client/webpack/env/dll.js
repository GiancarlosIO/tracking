/* eslint-disable import/no-extraneous-dependencies */
const { join } = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const AssetsPlugin = require('assets-webpack-plugin');

const { dllEntries, dllManifestPath } = require('../configuration');

const base = require('./base');

const dll = merge(base, {
  entry: {
    vendor: dllEntries,
  },
  output: {
    path: dllManifestPath,
    filename: '[name].[hash].min.js',
    publicPath: '/',
    chunkFilename: '[name].[chunkhash:8].chunk.min.js',
    // this field should be the same with name option in dll plugin
    library: '[name]_dll_[hash]',
  },
  plugins: [
    new webpack.DllPlugin({
      path: `${dllManifestPath}/vendor-manifest.json`,
      name: '[name]_dll_[hash]',
    }),
    new AssetsPlugin({
      path: dllManifestPath,
    }),
  ],
});

module.exports = dll;
