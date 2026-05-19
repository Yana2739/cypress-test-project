const { defineConfig } = require('cypress')

const environment = process.env.configFile || 'qauto'

const currentConfig = require(`./config/${environment}.config.js`)

module.exports = defineConfig({
  reporter: 'mochawesome',

  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  },

  e2e: {
    baseUrl: currentConfig.baseUrl,

    env: {
      userEmail: currentConfig.user.email,
      userPassword: currentConfig.user.password
    }
  }
})