import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Given('User navigated the demo Guru99 page', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
})

When('User enter email {string} and password {string}', (email, password) => {
    cy.get('#email').type(email)
    cy.get('#password').type(password)
})

When('User click on Login button', () => {
    cy.get('[type="submit"]').click()
})

Then('User click on Profile', () => {
    cy.get('#ui-id-4').click()
})

Then('User should see Title, Firstname, Surname, Phone, Dataofbirth', () => {
    cy.get('[aria-labelledby="ui-id-4"] p').eq(0).should('be.visible')
    cy.get('[aria-labelledby="ui-id-4"] p').eq(2).should('be.visible')
    cy.get('[aria-labelledby="ui-id-4"] p').eq(4).should('be.visible')
    cy.get('[aria-labelledby="ui-id-4"] p').eq(6).should('be.visible')
    cy.get('[aria-labelledby="ui-id-4"] p').eq(8).should('be.visible')
})