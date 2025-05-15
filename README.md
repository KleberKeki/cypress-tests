# 🧪 Testes Automatizados com Cypress

Este repositório contém testes automatizados de interface utilizando o framework [Cypress](https://www.cypress.io/).

## 📁 Estrutura do Projeto

cypress-tests/
├── cypress/
│ ├── e2e/
│ └── support/
├── cypress.config.js
└── package.json

bash
Copiar
Editar

## ⚙️ Tecnologias Utilizadas

- JavaScript
- Cypress
- Mocha (padrão interno do Cypress)
- Node.js

## 🚀 Como executar os testes

1. Clone o repositório:
```bash
git clone https://github.com/SEU_USUARIO/cypress-tests.git
cd cypress-tests
Instale as dependências:

bash
Copiar
Editar
npm install
Execute os testes em modo interativo:

bash
Copiar
Editar
npx cypress open
Ou em modo headless:

bash
Copiar
Editar
npx cypress run
📄 Casos de Teste Automatizados
 Teste de login com sucesso

 Teste de login inválido

 Cadastro de novo usuário

 Validação de campos obrigatórios

📌 Observações
Todos os testes foram baseados em critérios de aceitação definidos previamente. Foram incluídas as boas práticas de organização de pastas, comandos customizados e reuso de código
