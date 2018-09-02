const { join } = require('path');
const fs = require('fs');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = require('./base');
const { entries, output, dllManifestPath, productionMode } = require('../configuration');
const { entry } = require('./dll');

const assets = fs.readFileSync(`${dllManifestPath}/webpack-assets.json`);
const vendorEntryName = Object.keys(entry)[0];
const vendorDllName = `${productionMode ? '' : '/dist'}${JSON.parse(assets)[vendorEntryName].js}`

const shared = merge(base, {
  entry: entries,
  output,
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require(`${dllManifestPath}/vendor-manifest.json`),
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, '../../assets/index.html'),
      vendorDllName,
    }),
  ],
});

module.exports = shared;
