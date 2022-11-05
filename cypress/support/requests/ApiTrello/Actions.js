/// <reference types="cypress" />


export default new class Actions {
    getActions(id){
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('apiTrello')}/1/actions/${id}`,
            failOnStatusCode: false
        });
    }
}