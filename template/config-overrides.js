const { override, fixBabelImports, addWebpackAlias, addLessLoader } = require('customize-cra');
const path = require('path');

module.exports = {
  webpack: override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        paths: [path.resolve(__dirname, 'src')],
      }
    }),
    addWebpackAlias({
      '@' : path.resolve(__dirname, 'src')
    })
  )
};
