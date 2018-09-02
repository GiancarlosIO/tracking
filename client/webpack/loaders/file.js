const { srcFolderPath } = require('../configuration');

module.exports = {
  test: /.(ttf)$/,
  include: [srcFolderPath],
  loader: 'file-loader',
};
