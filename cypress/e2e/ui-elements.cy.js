describe('UI Header and Footer elements', () => {

    beforeEach(() => {
      cy.visit('https://qauto.forstudy.space/', {
        auth: {
          username: 'guest',
          password: 'welcome2qauto'
        }
      })
    })
  
    it('should find all header buttons', () => {
      cy.get('header')
        .should('be.visible')
        .within(() => {
          cy.get('button').should('exist')
          cy.get('a').should('exist')
        })
    })
  
    it('should find all footer links', () => {
        cy.get('footer')
          .should('be.visible')
          .within(() => {
            cy.get('a').should('have.length.at.least', 1)
          })
      })
  
  })