const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://example.com",
    viewportWidth: 1280,
    viewportHeight: 720,

    video: false,

    retries: {
      runMode: 1,
      openMode: 0
    },

    setupNodeEvents(on, config) {
      return config;
    },
  },
});