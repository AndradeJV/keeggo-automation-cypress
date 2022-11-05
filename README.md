# Teste de Automação Keeggo

Autor: João Andrade


## Tecnologias
- Cypress
- Report cypress (dashboard cypress.io)
- Github actions (continious integration)
- Docker


## Descrição automação
### Inicialização
Requisitos:
- Node versão superior a 12 (desenvolvido na versão 16)
- NPM a partir da versão 8 (desenvolvido na versão 8.11.0)
- Docker (caso queira rodar os testes em contêineres)

- Realizar um clone do projeto para o seu computador
- Abrir um terminal no local do clone
- Executar:
    - npm install
    - npx cypress run (caso falhe na primeira execução, executar o mesmo comando novamente)

- Execução via docker:
    

### Arquitetura e estrutura de pastas
- Os testes foram separados em web e api, nas pastas fixtures, tests e specs cada há sua devida separação
- Isso não impossibilita de em um mesmo arquivo de teste haver requisições diretamente em API e testes em interface ao mesmo tempo

- ./cypress -> Pasta com todos métodos, testes e configurações de teste do projeto
    - /fixtures -> Arquivos de json representando massa de dados para os testes
    - /specs -> BDDs para execução e requisitos de aceite do teste
    - /support -> Pasta de configuração e métodos do projeto
        - /views -> Métodos de manipulação do browser
            - /components -> Métodos para manipulação dos componentes da aplicação
            - /pages -> Métodos referente a cada página da aplicação
    - /tests -> Local onde os testes são escritos (pasta padrão onde o cypress estará escutando para executar os testes)
- node_modules -> pasta gerada pelo node com as bibliotecas necessárias para execução do projeto

- .gitignore -> arquivos que o git irá ignorar para realizar versionamento
- cypress.config.js -> arquivo padrão gerado pelo framework (a partir da versão 10) para realizar configurações gerais e executar plugins externos
- package.lock.json -> arquivo local para o node executar com as bibliotecas e frameworks utilizados
- package.json -> Arquivo de configuração de um projeto feito em Node
- README.md -> Arquivo de documentação do projeto

