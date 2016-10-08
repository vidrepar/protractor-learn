// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['partial/first-test/first-test-spec.js'],
    capabilities: {
        browserName:'chrome'
    },
    onPrepare: function () {
        var jasmineReporters = require('jasmine-reporters');
        var options = {
            savePath: 'outputxmldir',
            consolidate: true,
            useDotNotation: true
        };
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(options));
    }
};
