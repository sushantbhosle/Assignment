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

Then('User click on Request Quotation', () => {
    cy.get('#ui-id-2').click()
})

Then('User should see Request Quotation Title {string}', (title) => {
    cy.get('#tabs-2 h2').should('have.text', title)
})

When('User enter the Incident {string},Registration {string}, Annual mileage {string}, Estimated value {string}, Parking Location {string}', (Incident, Registration, annualMileage, estimatedValue, parkingLocation) => {
    cy.get('[placeholder="Enter incidents"]').type(Incident)
    cy.get('[placeholder="Enter vehicle registration"]').type(Registration)
    cy.get('[placeholder="Enter vehicle mileage"]').type(annualMileage)
    cy.get('[placeholder="Enter vehicle value"]').type(estimatedValue)
})

Then('User click on Save Quotation', () => {
    cy.get('[name="submit"]').click()
})

Then('User should see Identification Number', () => {
    cy.get('body b').first().should('have.text','You have saved this quotation!')
    cy.get('body b').eq(1).should('have.text','Your identification number is :  ')
    cy.get('body b').eq(2).should('have.text','Please write it down for later retrieve')
})