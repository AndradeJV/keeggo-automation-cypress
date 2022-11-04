/// <reference types="cypress" />

import selectors from './selectors.json'
import login from '../../../../fixtures/web/default/login.json'


export default new class LoginPage {
    // Realizar login
    login(email, password) {
        cy.get(selectors.email).type(email);
        cy.get(selectors.password).type(password);
        cy.get(selectors.submitLogin).click();
    }

    // Login com usuário padrão
    loginWithStandardUser(){
        this.login(login.email, login.password);
    }

    // Validar se o login foi realizado com sucesso
    validateLoginSuccess() {
        cy.get(selectors.validateLogin.nav).should('be.visible');
        cy.get(selectors.validateLogin.spanCenter).should('be.visible');
    }
}