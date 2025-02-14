describe('Adicionar Produto ao Carrinho', () => {
  it('Deve adicionar um produto ao carrinho com sucesso', () => {
    // Passo 1: Acessar a página inicial da loja
    cy.visit('https://loja.vr.com.br/');

    // Passo 2: Selecionar a opção "Multi"
    cy.contains('Multi').click();

    // Passo 3: Adicionar uma quantidade aleatória de 1 a 300 cartões do produto "Multi"
    const quantidade = Math.floor(Math.random() * 300) + 1;
    cy.get('#produto-207-quantidade').clear().type(quantidade);

    // Passo 4: Selecionar "Multi - Auxílio VR+VA" e adicionar crédito aleatório de 3000 a 4000
    const creditoAuxilio = Math.floor(Math.random() * (4000 - 3000 + 1)) + 3000;
    cy.get('#selecionar-produto-213 > .fas').click();
    cy.get('#produto-vr-mais-va-valor').clear().type(creditoAuxilio).wait(3000);
    

    // Passo 5: Selecionar "Multi - Premiação" e adicionar crédito aleatório de 1000 a 2000
    const creditoPremiacao = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
    cy.get('#selecionar-produto-59 > .fas').click();
    cy.get('#produto-premiacao-valor').clear().type(creditoPremiacao).wait(3000);

    // Passo 6: Selecionar "Multi - Mobilidade" e adicionar crédito aleatório de 2000 a 4000
    const creditoMobilidade = Math.floor(Math.random() * (4000 - 2000 + 1)) + 2000;
    cy.get('#selecionar-produto-262 > .fas').click();
    cy.get('#produto-mobilidade-valor').clear().type(creditoMobilidade).wait(3000);

    // Passo 7: Validar se "VR + VA", "Premiação" e "Mobilidade" estão no Resumo da compra
    cy.contains('Resumo da compra').should('be.visible');
    cy.contains('VR + VA').should('be.visible');
    cy.contains('Premiação').should('be.visible');
    cy.contains('Mobilidade').should('be.visible');

    // Passo 8: Validar o total no resumo da compra
    cy.get('.lojavr-style-c-haZkyA > :nth-child(2)').should('exist').and('be.visible');
    
  });
});
