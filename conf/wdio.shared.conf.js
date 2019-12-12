exports.config = {
    //debug:true,
    //execArgv:['--inspect-brk=127.0.0.1:9515'],
    // ====================
    // Runner and framework
    // Configuration
    // ====================
    runner: 'local',
    framework: 'jasmine',
    jasmineNodeOpts: {
        // Updated the timeout to 30 seconds due to possible longer appium calls
        // When using XPATH
        defaultTimeoutInterval: 90000,
    },
    sync: true,
    logLevel: 'silent',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'http://popflyxp.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    reporters: ['spec'],
    /*reporters: ['allure','spec'],
    reporterOptions: {
        allure: {
            outputDir: './allure-reports'
        }
    },*/

    // ====================
    // ChromeDriver Configuration
    // ====================
    //services: ['chromedriver','geckodriver'],
    
    path: '/',
    //chromeDriverArgs: ['--port=9515'], // default for ChromeDriver
    chromeDriverLogs: './',

    // ====================
    // GeckoDriver Configuration
    // ====================
    geckoDriverArgs: ['--port=4444'],

    // OPTIONAL: Location of geckodriver logs.
    // Must be a directory if using maxInstances > 1.
    // Could be a file name or a directory if maxInstances == 1.
    // Logs are saved as `GeckoDriver-{portname}.txt`
    // Logs are not stored if this option is not set.
    // Default: not set
    //geckoDriverLogs: './',

    // OPTIONAL: Launch geckodriver once for all specs if true.
    // Launch geckodriver for each spec separately if false.
    // Must be set to false if maxInstances > 1.
    // Default: false
    //geckoDriverPersistent: false,

    // OPTIONAL: Use a random port for launching geckodriver.
    // Must be set to true if maxInstances > 1.
    // Set it to false to use the `port` config option.
    // Default: true
    //geckoDriverRandomPort: false,
    // ====================
    // Some hooks
    // ====================
    beforeSession: (config, capabilities, specs) => {
        require('@babel/register');
    },
    
};
