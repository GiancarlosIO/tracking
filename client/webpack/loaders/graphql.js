const { srcFolderPath } = require('../configuration');

module.exports = {
  test: /\.(graphql)/,
  include: [srcFolderPath],
  loader: 'graphql-tag/loader',
};
