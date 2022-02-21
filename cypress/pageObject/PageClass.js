const LOCATOR = {
  userLocator: '#email',
  pwdLocator: '#passwd',
  loginLocator: '#SubmitLogin',
}

function loginIn(userName, password) {
  cy.log(userName, password)
  cy.signIn(
    LOCATOR.userLocator,
    LOCATOR.pwdLocator,
    LOCATOR.loginLocator,
    userName,
    password
  )
}

module.exports = {
  loginIn,
}
