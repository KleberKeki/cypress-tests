# 🧪 Testes Automatizados com Cypress — Projeto de Estudo

Este projeto foi desenvolvido durante um bootcamp oferecido pela [Qazando](https://qazando.com.br/), com o objetivo de colocar em prática conhecimentos em testes automatizados utilizando o framework **Cypress**.

---

## 🎯 Objetivo

O foco deste repositório é **praticar testes End-to-End (E2E)** em uma aplicação web simulada. A ideia é reforçar conhecimentos adquiridos na área de qualidade de software, melhorar a escrita de testes automatizados e organizar os arquivos como em um projeto real.

---

## 🧠 Sobre o Cypress

[Cypress](https://www.cypress.io/) é um framework moderno de testes end-to-end voltado para aplicações web. Ele roda diretamente no navegador, com visualização em tempo real, o que facilita a depuração. É muito utilizado para garantir a qualidade de aplicações em ambientes ágeis e CI/CD.

---

## 📋 Casos de Teste Automatizados

Funcionalidade testada: **Login**

| ID     | Cenário                       | Validação Esperada           |
|--------|-------------------------------|------------------------------|
| CT001  | Login com sucesso             | "Login realizado"            |
| CT002  | E-mail inválido               | "E-mail inválido."           |
| CT003  | Senha inválida                | "Senha inválida."            |
| CT004  | Senha vazia                   | "Senha inválida."            |
| CT005  | E-mail vazio                  | "E-mail inválido."           |
| CT006  | E-mail e senha vazios         | "E-mail inválido."           |

- 📝 [Plano de testes](./Testes-manuais/plano-de-teste.md)

- ✔️ [Arquivo com os casos de teste](./Testes-manuais/casos-de-teste.md)

---

## ▶️ Como executar os testes

> Pré-requisitos: **Node.js** instalado

1. Instale as dependências do projeto:

```bash
npm install
````

2. Para executar com interface gráfica:

```bash
npx cypress open
```

3. Para executar no terminal (modo headless):

```bash
npx cypress run
```

---

## 🤖 Integração Contínua (CI/CD)

O projeto está configurado com **GitHub Actions** para rodar automaticamente os testes a cada `push` no repositório.

---

## 👨‍💻 Autor

Kleber — em transição de carreira da música para a tecnologia, aprendendo e praticando QA com seriedade.
Projeto feito com base no aprendizado adquirido no bootcamp [Qazando](https://qazando.com.br/).