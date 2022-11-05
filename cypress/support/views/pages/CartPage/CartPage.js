/// <reference types="cypress" />

import selectors from './selectors.json';


export default new class CartPage {
    // Clicar no primeiro produto encontrado
    validateProductInCart(){
        cy.get(selectors.tbody).should('be.visible');
    }

    // Ir para aba de endereço
    continueForAddress(){
        cy.get(selectors.continueForAddress).click()
    }
    // Ir para aba 'Shipping'
    continueForShipping(){
        cy.get(selectors.continueForShipping).click();
    }

    // Aceitar termo
    acceptTerm(){
        cy.get(selectors.term).click();
    }

    // Ir para pagamento
    continueForPayment(){
        cy.get(selectors.continueForPayment).click();
    }
}