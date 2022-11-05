import Actions from '../../../support/requests/ApiTrello/Actions';
import payload from '../../../fixtures/api/apiTrello/realizar_requisicao_em_actions.json';


describe('Realizar requisição no endpoint actions', () => {
    context('Testes funcionais positivos', () => {
        it('Realizar GET com sucesso', () => {
            Actions.getActions(payload.success.id).should(res => {
                const name = payload.success.body.data.list.name

                expect(res.status).to.eq(200);
                expect(res.body.data.list.name).to.eq(name);
                console.log(name)
            });
        });
    });


    context('Testes funcionais negativos', () => {
        it('Realizar um get para um id inexistente', () => {
            Actions.getActions(payload.failed.id).should(res => {
                expect(res.status).to.eq(400);
                expect(res.body).to.eq(payload.failed.body)
            });
        })
    });
})