const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');
const cypressSplit = require('cypress-split')

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    useInlineDiffs: true,
    embeddedScreenshots: true,
    reportDir: 'cypress/results',
    reportFilename: '[name].html',
    overwrite: true,
    html: true,
    json: true,
  },
  e2e: {
    "video":false,
    "blockHosts":["www.google-analytics.com", "https://googleads.g.doubleclick.net/**/*"],
    // "reporter": "cypress-junit-reporter",
    // "reporterOptions": {
    //   "mochaFile": "cypress/results/junit/test-results.[hash].xml",
    //   "toConsole": true
    // },

    // "reporter": "cypress-multi-reporters",
    // "reporterOptions": {
    //   "reporterEnabled": "mochawesome, junit",
    //   "mochawesomeReporterOptions": {
    //     "reportDir": "mochawesome-report",
    //     "reportFilename": "report"
    //   },
    //   "junitReporterOptions": {
    //     "mochaFile": "cypress/results/test-results.[hash].xml",
    //     "toConsole": true
    //   }
    // },
    setupNodeEvents(on, config) {
      //require("./cypress/support/dockerComoseGenerator")
      cypressSplit(on, config)
      // IMPORTANT: return the config object
      return config
    },
  },
});
