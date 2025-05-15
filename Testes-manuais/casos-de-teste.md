# 📄 Casos de Teste — Funcionalidade de Login

---

## 🔐 CT001 - Login com sucesso

- **Pré-condição:** Usuário com credenciais válidas
- **Passos:**
  1. Acessar a página de login
  2. Informar e-mail válido
  3. Informar senha válida
  4. Clicar em "Entrar"
- **Resultado esperado:** Exibir a mensagem "Login realizado"

---

## ❌ CT002 - E-mail inválido

- **Pré-condição:** Nenhuma
- **Passos:**
  1. Acessar a página de login
  2. Informar e-mail inválido
  3. Informar senha válida
  4. Clicar em "Entrar"
- **Resultado esperado:** Exibir a mensagem "E-mail inválido."

---

## ❌ CT003 - Senha inválida

- **Pré-condição:** Nenhuma
- **Passos:**
  1. Acessar a página de login
  2. Informar e-mail válido
  3. Informar senha inválida (curta)
  4. Clicar em "Entrar"
- **Resultado esperado:** Exibir a mensagem "Senha inválida."

---

## ❌ CT004 - Senha vazia

- **Pré-condição:** Nenhuma
- **Passos:**
  1. Acessar a página de login
  2. Informar e-mail válido
  3. Deixar senha em branco
  4. Clicar em "Entrar"
- **Resultado esperado:** Exibir a mensagem "Senha inválida."

---

## ❌ CT005 - E-mail vazio

- **Pré-condição:** Nenhuma
- **Passos:**
  1. Acessar a página de login
  2. Deixar o campo e-mail em branco
  3. Informar senha válida
  4. Clicar em "Entrar"
- **Resultado esperado:** Exibir a mensagem "E-mail inválido."

---

## ❌ CT006 - E-mail e senha vazios

- **Pré-condição:** Nenhuma
- **Passos:**
  1. Acessar a página de login
  2. Deixar ambos os campos em branco
  3. Clicar em "Entrar"
- **Resultado esperado:** Exibir a mensagem "E-mail inválido."

- Plano de automação no Cypress: [README.md do projeto principal](../README.md)