/// <reference types="cypress" />

import selectors from './selectors.json';

export default new class HeaderComponent {
    clickSignIn() {
        cy.get(selectors.buttonSignIn).click();
    }

    // Ir para página inicial a partir do logo
    goToBasePageFromLogo(){
        cy.get(selectors.logo).click();
    }

    // Buscar por um produto
    searchProduct(product){
        cy.get(selectors.product)
        .type(`${product}{enter}`);
    }
}