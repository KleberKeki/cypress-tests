# 📘 Plano de Teste — Funcionalidade de Login

## 📌 Identificação do Teste

- **Projeto:** Testes Automatizados com Cypress
- **Funcionalidade:** Login de usuário
- **Data de criação:** [Insira a data]
- **Responsável:** Kleber
- **Base:** Exercício do bootcamp Qazando (https://qazando.com.br/)

---

## 🎯 Objetivo do Teste

Validar os comportamentos esperados do formulário de login, assegurando que o sistema trate corretamente diferentes combinações de entrada de dados (válidas e inválidas).

---

## 🧪 Escopo do Teste

- Acesso ao formulário de login
- Validação de campos obrigatórios
- Respostas para entradas válidas e inválidas
- Exibição de mensagens de erro ou sucesso

---

## 🛠️ Ambiente de Teste

- **URL de testes:** https://automationpratice.com.br/login  
- **Navegador recomendado:** Google Chrome (versão atual)
- **Ferramentas utilizadas:** Cypress, Node.js

---

## 🔁 Critérios de Entrada

- Ambiente disponível e funcional
- Usuário de teste previamente cadastrado:
  - Email: `email.teste@automacao.com`
  - Senha: `123456`
- Cypress instalado e dependências resolvidas via `npm install`

---

## ✅ Critérios de Saída

- Todos os cenários validados
- Comportamento da aplicação conforme especificado
- Evidências de testes (logs ou prints, se manuais)

---

## 🔄 Critérios de Repetição

- Executar os testes sempre que houver mudanças na tela de login
- A cada novo deploy no ambiente de homologação

---

## 📝 Referências

- Casos de teste documentados em: [casos-de-teste.md](./casos-de-teste.md)
- Plano de automação no Cypress: [README.md do projeto principal](../README.md)
