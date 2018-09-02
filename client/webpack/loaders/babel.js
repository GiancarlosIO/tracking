const { srcFolderPath } = require('../configuration');

module.exports = {
  test: /\.(js)$/,
  include: [srcFolderPath],
  use: [
    { loader: 'babel-loader', options: { cacheDirectory: true } },
  ],
};
