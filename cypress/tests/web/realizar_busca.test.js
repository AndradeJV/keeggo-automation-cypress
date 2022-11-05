import HomePage from '../../support/views/pages/HomePage/HomePage';
import MyAccountPage from '../../support/views/pages/MyAccountPage/MyAccountPage';
import SearchOrderPage from '../../support/views/pages/SearchOrderPage/SearchOrderPage';
import CartPage from '../../support/views/pages/CartPage/CartPage';

import HeaderComponent from '../../support/views/components/HeaderComponent/HeaderComponent';
import ModalProductComponent from '../../support/views/components/ModalProductComponent/ModalProductComponent';

import payload from '../../fixtures/web/realizar_busca.json';


describe('Realizar login com sucesso', () => {
    context('Testes funcionais positivos', () => {
        before(() => {
            HomePage.goToPage();
            HeaderComponent.clickSignIn();
            MyAccountPage.loginWithStandardUser();
            MyAccountPage.validateLoginSuccess();
        });

        it('Realizar busca para um produto existente', () => {
            const scenarioPayload = payload.existingProducts;

            HeaderComponent.searchProduct(scenarioPayload[0]);

            cy.get('#center_column > ul').should('be.visible');
            cy.get('#center_column .left-block > div').should('be.visible')

            SearchOrderPage.clickFirstProductFound();

            ModalProductComponent.clickFirstProductFound();
            CartPage.validateProductInCart();
            CartPage.continueForAddress();
            CartPage.continueForShipping();
            CartPage.acceptTerm();
            CartPage.continueForPayment();
            cy.get('#product_5_19_0_765970 a > img').should('be.visible');
        });
    });

    context('Testes funcionais negativos', () => {
        beforeEach(() => {
            HomePage.goToPage();
        });

        it('Realizar busca para um produto existente', () => {
            const scenarioPayload = payload.nonExistingProducts;
            HeaderComponent.clickSignIn();
            MyAccountPage.loginWithStandardUser();
            MyAccountPage.validateLoginSuccess();
            HeaderComponent.searchProduct(scenarioPayload.products[0]);

            cy.get('#center_column > p').should('be.visible');
        });

        it('Tentar realizar busca para um usuário inexistente na plataforma', () => {
            const scenarioPayload = payload.loginInvalid;

            HeaderComponent.clickSignIn();
            MyAccountPage.login(scenarioPayload.email, scenarioPayload.password);
            MyAccountPage.validateLoginFailed();
        })
    });
});