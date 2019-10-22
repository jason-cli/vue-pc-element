var path = require('path')

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  lintOnSave: true,
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
    },
    modules: false
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/styles/index.scss')]
    }
  },
  configureWebpack: config => {
    config.entry = ['babel-polyfill', './src/main.js']
  },
  devServer: {
    host: 'localhost',
    port: '7902',
    proxy: {
      '/api': {
        // proxy
        target: 'http://www.baidu.com',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
