describe('Registration form validation', () => {

    beforeEach(() => {
      cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
      cy.contains('Sign up').click()
    })
  
    it('Should validate Name field', () => {
      cy.get('#signupName').type('A').blur()
      cy.get('.invalid-feedback')
        .should('contain', 'Name has to be from 2 to 20 characters long')
  
      cy.get('#signupName').clear().type('  John  ').blur()
    })
  
    it('Should validate Last name field', () => {
      cy.get('#signupLastName').type('B').blur()
      cy.get('.invalid-feedback')
        .should('contain', 'Last name has to be from 2 to 20 characters long')
    })
  
    it('Should validate Email field', () => {
      cy.get('#signupEmail').type('invalidEmail').blur()
      cy.get('.invalid-feedback')
        .should('contain', 'Email is incorrect')
    })
  
    it('Should validate Password rules', () => {
      cy.get('#signupPassword').type('123').blur()
      cy.get('.invalid-feedback')
        .should('contain', 'Password has to be from 8 to 15 characters long')
    })
  
    it('Should check password match', () => {
      cy.get('#signupPassword').type('Qwerty123')
      cy.get('#signupRepeatPassword').type('Qwerty124').blur()
  
      cy.get('.invalid-feedback')
        .should('contain', 'Passwords do not match')
    })
  
    it('Should show errors for empty fields', () => {

        cy.get('#signupName').focus().blur()
        cy.get('#signupLastName').focus().blur()
      
        cy.get('#signupName')
          .should('have.class', 'is-invalid')
      
        cy.get('#signupLastName')
          .should('have.class', 'is-invalid')
      
      })
  
    it('Should register new user successfully', () => {
      cy.get('#signupName').type('John')
      cy.get('#signupLastName').type('Wick')
      cy.get('#signupEmail').type(`test${Date.now()}@mail.com`)
      cy.get('#signupPassword').type('Qwerty123')
      cy.get('#signupRepeatPassword').type('Qwerty123')
  
      cy.contains('Register').should('not.be.disabled').click()
  
      cy.contains('Sign up').should('not.exist')
    })
  
  })