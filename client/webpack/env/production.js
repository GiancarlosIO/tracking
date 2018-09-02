/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');

const shared = require('./shared');

const production = merge(shared, {
  output: {
    chunkFilename: '[name].[chunkhash:8].chunk.js',
  },
});

module.exports = production;
