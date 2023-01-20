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

Then('User should navigated to HomePage', () => {
    cy.get('[value="Log out"]').should('be.visible')
})

Then('User click on Logout', () => {
    cy.get('[value="Log out"]').click()
})

Then('User should see Login', () => {
    cy.get('.content h3').should('be.visible')
})