const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        projectId: "meg3r3",
        viewportWidth: 1440,
        viewportHeight: 900,
        setupNodeEvents(on, config) {},

        baseUrl: 'http://automationpractice.com/index.php',
        specPattern: 'cypress/tests/**/*.test.js',
    },

    env: {
        apiTrello: 'https://api.trello.com/'
    },
});