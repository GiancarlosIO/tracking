const { resolve, join } = require('path');

const { getFolderPath, getPackagePath } = require('./utils');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const srcFolderPath = resolve(__dirname, '../src');
const productionMode = process.env.NODE_ENV === 'production';

const modules = [
  'node_modules',
  resolve(__dirname, '../src'),
];
const extensions = ['.ts', '.tsx', '.js', '.scss', '.css', '.sass', '.graphql'];

const optimization = {
  splitChunks: {
    // disable chunk name in production builds
    name: !productionMode,
    chunks: 'async',
  },
  minimizer: productionMode ? [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
    }),
  ] : [],
};

const alias = {
  Shared: getFolderPath('Shared'),
};

const dllEntries = [
  'react',
  'react-dom',
  'prop-types',
  'emotion',
  'react-emotion',
  'emotion-theming',
  'loadable-components',
  'fecha',
  'graphql-tag',
  'react-apollo',
  'apollo-client',
  'apollo-link',
  'apollo-link-error',
  'apollo-link-http',
  'apollo-link-state',
  'react-router-dom',
  'apollo-cache-inmemory',
];
const dllManifestPath =  productionMode ? resolve(__dirname, '../../server/public/') : resolve(__dirname, '../dist') ;

const entries = {
  app: resolve(__dirname, '../src/index.tsx'),
};

const devServerConfig = {
  historyApiFallback: true,
  hot: true,
  // trailing slash is super-mega-necessary %$"$"&"·$"·$·
  publicPath: 'http://localhost:9000/',
  port: 9000,
  overlay: {
    warnings: false,
    errors: true,
  },
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,OPTIONS,HEADER,PUT,POST,DELETE,PATCH',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization, X-Request-With',
    'Access-Control-Allow-Credentials': 'true',
    watchOptions: {
      ignored: /node_modules/,
    },
  },
};

const output = {
  path: productionMode ? join(__dirname, '../../server/public/') : resolve(__dirname, '../dist'),
  publicPath: productionMode ? '/' : devServerConfig.publicPath,
  filename: `[name].${productionMode ? '[hash].' : ''}min.js`,
  chunkFilename: `[name].${productionMode ? '[hash].' : ''}chunk.js`,
};

module.exports = {
  srcFolderPath,
  productionMode,
  alias,
  modules,
  extensions,
  optimization,
  dllEntries,
  dllManifestPath,
  entries,
  devServerConfig,
  output,
};
