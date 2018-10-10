const { srcFolderPath } = require('../configuration');

module.exports = {
  test: /\.(js|ts|tsx)$/,
  include: [srcFolderPath],
  use: [
    {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
      }
    },
  ],
};
