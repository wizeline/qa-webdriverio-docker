'use strict'

//exports.config = Object.assign({}, require('./hooks'), {
  exports.config = {
  hostname: 'chromedriver',
  path: '/',
  capabilities: [
    {
      // Set maxInstances to 1 if screen recordings are enabled:
      // maxInstances: 1,
      browserName: 'chrome',
      'goog:chromeOptions': {
        // Disable headless mode if screen recordings are enabled:
        args: ['--window-size=1440,900']
      }
    }
  ],
  logLevel: 'warn',
  reporters: ['spec'],

  framework: 'jasmine',
  jasmineNodeOpts: {
      // Updated the timeout to 30 seconds due to possible longer appium calls
      // When using XPATH
      defaultTimeoutInterval: 90000,
  },
  //framework: 'mocha',
  //mochaOpts: {
    //timeout: 60000
  //},
  specs: ['./tests/specs/first.js'],
  maximizeWindow: true,
  screenshots: {
    saveOnFail: true
  },
  videos: {
    enabled: false,
    resolution: '1440x900',
    startDelay: 500,
    stopDelay: 500
  },
  //assetsDir: '/home/webdriver/assets/',
  baseUrl: 'http://example:8080',

  beforeSession: (config, capabilities, specs) => {
    require('@babel/register');
},
}
