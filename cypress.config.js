const { defineConfig } = require("cypress");

const isReportRun = process.env.CYPRESS_REPORT === "true";

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://example.cypress.io",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
    video: !process.env.CI,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      return config;
    },
  },
  reporter: isReportRun ? "mochawesome" : "spec",
  reporterOptions: isReportRun
    ? {
        reportDir: "cypress/reports",
        overwrite: false,
        html: false,
        json: true,
      }
    : undefined,
});
