Cypress.Commands.add('login', () => {

  cy.visit('/')

  cy.contains('Sign In').click()

  cy.get('#signinEmail')
    .type(Cypress.env('userEmail'))

  cy.get('#signinPassword')
    .type(Cypress.env('userPassword'), { sensitive: true })

  cy.contains('Login').click()
})


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