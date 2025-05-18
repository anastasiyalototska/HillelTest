module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      const configFile = config.env.configFile || "qauto";
      const customConfig = require(`./config/${configFile}.config.js`);

      config.baseUrl = customConfig.baseUrl;
      config.env.user = customConfig.user;

      return config;
    },
  },
});
