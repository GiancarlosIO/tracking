const { srcFolderPath } = require('../configuration');

module.exports = {
  test: /\.(tsx|ts)?$/,
  // include: [srcFolderPath],
  exclude: /node_modules/,
  use: [
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
    {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
      },
    },
  ],
};
