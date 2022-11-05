/// <reference types="cypress" />

import selectors from './selectors.json';


export default new class SearchOrderPage {
    // Clicar no primeiro produto encontrado
    clickFirstProductFound(){
        cy.get(selectors.product).first().click({ force: true });
        cy.wait(300);
    }
}