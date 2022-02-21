Cypress.Commands.add(
  'signIn',
  (userLocator, pwdLocator, loginLocator, userName, password) => {
    cy.get('.login').click()
    cy.get(userLocator).type(userName)
    cy.get(pwdLocator).type(password)
    cy.get(loginLocator).click()
  }
)
