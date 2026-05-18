Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {

    if (options && options.sensitive) {
  
      options.log = false
  
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      })
    }
  
    return originalFn(element, text, options)
  })
  
  
  Cypress.Commands.add('login', (email, password) => {
  
    cy.visit('https://qauto.forstudy.space/')
  
    cy.contains('Sign In').click()
  
    cy.get('#signinEmail').type(email)
  
    cy.get('#signinPassword')
      .type(password, { sensitive: true })
  
    cy.contains('Login').click()
  })