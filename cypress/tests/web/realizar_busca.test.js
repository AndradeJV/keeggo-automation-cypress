import HomePage from '../../support/views/pages/HomePage/HomePage';
import LoginPage from '../../support/views/pages/LoginPage/LoginPage';

import HeaderComponent from '../../support/views/components/HeaderComponent/HeaderComponent';


describe('Realizar login com sucesso', () => {
    before(() => {
        HomePage.goToPage();
    });

    it('Login com usuário "Teste"', () => {
        HeaderComponent.clickSignIn();
        LoginPage.loginWithStandardUser();
        LoginPage.validateLoginSuccess();
    });
});