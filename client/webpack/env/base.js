const webpack = require('webpack');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const {
  alias,
  extensions,
  modules,
  optimization,
  productionMode,
} = require('../configuration');

const {
  babel,
  file,
  style,
  graphql,
} = require('../loaders');

const base = {
  target: 'web',
  devtool: productionMode ? 'none' : 'source-map',
  optimization,
  resolve: {
    alias,
    extensions,
    modules,
  },
  module: {
    rules: [
      babel,
      style,
      file,
      graphql,
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
};


if (process.env.ANALYZER_ENV) {
  const analyzer = new BundleAnalyzer();

  base.plugins.push(analyzer);
}


module.exports = base;
