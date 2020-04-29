const path = require('path');

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        vue$: path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js'),
      },
    },
    performance: {
      hints: false,
    },
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
