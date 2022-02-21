/// <reference types="cypress" />
import { loginIn } from '../../pageObject/PageClass'

describe('Login scenarios', () => {
  let testdata
  beforeEach(() => {
    cy.visit(Cypress.env('baseURL'))
    cy.fixture('testdata').then((data) => {
      testdata = data
    })
  })
  it('Login scenario with valid credentials', () => {
    loginIn(testdata.emailID, testdata.password)
  })
})
