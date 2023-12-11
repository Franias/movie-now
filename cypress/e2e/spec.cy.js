describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Bem vinda, Fran')

    cy.contains('Assista agora').click();
  })
})