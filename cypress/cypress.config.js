const { defineConfig } = require('cypress')

module.exports = defineConfig({
  allowCypressEnv: false,
  viewportWidth: 1440,
  viewportHeight: 1400,
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://demoqa.com'
  },
})
