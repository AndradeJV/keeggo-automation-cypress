/// <reference types="cypress" />

import selectors from './selectors.json';


export default new class ModalProductComponent {
    // Clicar no primeiro produto encontrado
    clickFirstProductFound(){
        cy.get(selectors.buttonProceedCheckout).first().click({ force: true });
    }
}