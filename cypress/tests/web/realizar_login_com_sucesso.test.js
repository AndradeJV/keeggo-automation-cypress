import HomePage from '../../support/views/pages/HomePage/HomePage';
import LoginPage from '../../support/views/pages/LoginPage/LoginPage';

import HeaderComponent from '../../support/views/components/HeaderComponent/HeaderComponent';

import payload from '../../fixtures/web/realizar_login_com_sucesso.json';


describe('Realizar login com sucesso', () => {
    before(() => {
        HomePage.goToPage();
    });

    it('Login com usuário "Teste"', () => {
        HeaderComponent.clickSignIn();
        LoginPage.doLogin(payload.email, payload.password);
        LoginPage.validateLoginSuccess();
    });
});