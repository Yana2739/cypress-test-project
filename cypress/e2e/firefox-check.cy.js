describe('Firefox run check', () => {
    it('should open qauto website', () => {
      cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
      cy.contains('Sign In').should('be.visible')
    })
  })