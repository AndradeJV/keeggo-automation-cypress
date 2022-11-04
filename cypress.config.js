const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {},

        baseUrl: 'http://automationpractice.com/index.php',
        specPattern: 'cypress/tests/**/*.test.js'
    },

    env: {
        apiTrello: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a'
    },


    video: false
});