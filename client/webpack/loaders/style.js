const { srcFolderPath, productionMode } = require('../configuration');

module.exports = {
  test: /\.(c|sc|sa)ss$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        minimize: productionMode ? { preset: 'default' } : false,
      },
    },
    'sass-loader',
  ],
};