///<reference types="cypress" />

//funcionalidade
describe("Login",() => {

//cenario1
it ("Login com sucesso",() => {
//abrir a aplicaçao
cy.visit('https://automationpratice.com.br/login');
// preenche emaile senha 
cy.get('#user').type('email.teste@automacao.com');
cy.get('#password').type('123456');
//clicar em entrar
cy.get('#btnLogin').click();
//valida a mensagem
cy.get('#swal2-title').should('be.visible');
cy.get('#swal2-title').should('have.text','Login realizado');

});
//cenario2
it ("E-mail invalido",() => {
    //abrir a aplicaçao
    cy.visit('https://automationpratice.com.br/login');
    // preenche emaile senha 
    cy.get('#user').type('email.teste-invalido');
    cy.get('#password').type('123456');
    //clicar em entrar
    cy.get('#btnLogin').click();
    //valida a mensagem
    cy.get('.invalid_input').should('have.text' , 'E-mail inválido.');
    });

    //cenario3
it ("Senha invalida",() => {
    //abrir a aplicaçao
    cy.visit('https://automationpratice.com.br/login');
    // preenche emaile senha 
    cy.get('#user').type('email.teste@automacao.com');
    cy.get('#password').type('12');
    //clicar em entrar
    cy.get('#btnLogin').click();
    //valida a mensagem
    cy.get('.invalid_input').should('have.text' , 'Senha inválida.');
    });

     //cenario4
it ("Senha vazia",() => {
    //abrir a aplicaçao
    cy.visit('https://automationpratice.com.br/login');
    // preenche emaile senha 
    cy.get('#user').type('email.teste@automacao.com');
    
    //clicar em entrar
    cy.get('#btnLogin').click();
    //valida a mensagem
    cy.get('.invalid_input').should('have.text' , 'Senha inválida.');
    });

 //cenario5
it ("E-mail vazio",() => {
    //abrir a aplicaçao
    cy.visit('https://automationpratice.com.br/login');
    // preenche emaile senha 
    
    cy.get('#password').type('123456');
    //clicar em entrar
    cy.get('#btnLogin').click();
    //valida a mensagem
    cy.get('.invalid_input').should('have.text' , 'E-mail inválido.');
    });

 //cenario6
 it ("E-mail e Senha vazios",() => {
    //abrir a aplicaçao
    cy.visit('https://automationpratice.com.br/login');
    // preenche emaile senha 
    //clicar em entrar
    cy.get('#btnLogin').click();
    //valida a mensagem
    cy.get('.invalid_input').should('have.text' , 'E-mail inválido.');
    });



});

