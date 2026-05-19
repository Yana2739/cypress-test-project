describe('My first Cypress test', () => {
    it('opens page using baseUrl', () => {
      cy.visit('/')
  
      cy.contains('Example Domain')
    })
  })