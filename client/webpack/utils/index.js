const { resolve } = require('path');

const getPackagePath = packageName => resolve(__dirname, `../../node_modules/${packageName}`);
const getFolderPath = folderName => resolve(__dirname, `../../src/${folderName}`);

module.exports = {
  getPackagePath,
  getFolderPath,
};
