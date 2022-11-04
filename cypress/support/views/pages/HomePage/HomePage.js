/// <reference types="cypress" />



export default new class HomePage {
    constructor() {
        this.HeaderComponent;
    }

    // Navegar até a página
    goToPage(){
        cy.visit('/');
    }
}