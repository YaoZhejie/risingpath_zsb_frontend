'use strict'

const path = require('path')

module.exports = {
  dev: {

  
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: 'http://localhost:8888/api',
        changeOrigin: true
      }
    },
    
    host: 'localhost', 
    port: 80, 
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, 


    useEslint: true,

    showEslintErrorsInOverlay: false,


    devtool: 'cheap-module-eval-source-map',


    cacheBusting: true,

    cssSourceMap: true,
    
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

  
    productionSourceMap: true,

    devtool: '#source-map',


    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    bundleAnalyzerReport: process.env.npm_config_report
  }
}
