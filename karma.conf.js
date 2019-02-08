const webpack = require('./webpack-test.config');

module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['jasmine'],

    files: [
      './src/app/index.spec.js',
    ],

    exclude: [],

    webpack,

    preprocessors: {
      './src/app/index.spec.js': ['webpack'],
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity,
  })
};
