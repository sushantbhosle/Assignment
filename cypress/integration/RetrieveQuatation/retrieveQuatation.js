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

Then('User click on Retrieve Quotation', () => {
    cy.get('#ui-id-3').click()
})

Then('User should see Retrieve', () => {
    cy.get('#getquote').should('be.visible')
})

Then('User enter the Identification Number {string}', (number) => {
    cy.get('[placeholder="identification number"]').type(number)
})

When('User click on Retrieve', () => {
    cy.get('#getquote').click()
})

Then('User should see Retrieve Quotation', () => {
    cy.get('body b font').should('be.visible')
})

Then('User should see Insurance Name and Value', () => {
cy.get('tbody tr td b').first().should('have.text','Insurance Name')
cy.get('tbody tr td b').eq(1).should('have.text','Value')
cy.get('tbody tr td b').eq(3).should('have.text','Windscreenrepair')
cy.get('tbody tr td').eq(9).should('have.text','No')
cy.get('tbody tr td b').eq(4).should('have.text','user_id')
cy.get('tbody tr td').eq(11).should('have.text','50352')
cy.get('tbody tr td b').eq(5).should('have.text','incidents')
cy.get('tbody tr td').eq(13).should('have.text','1')
cy.get('tbody tr td b').eq(6).should('have.text','Registration')
cy.get('tbody tr td').eq(15).should('have.text','2')
cy.get('tbody tr td b').eq(7).should('have.text','Annual mileage')
cy.get('tbody tr td').eq(17).should('have.text','3')
cy.get('tbody tr td b').eq(8).should('have.text','Estimated value')
cy.get('tbody tr td').eq(19).should('have.text','4')
cy.get('tbody tr td b').eq(9).should('have.text','Parking Location')
cy.get('tbody tr td').eq(21).should('have.text','Road')
cy.get('tbody tr td b').eq(10).should('have.text','Start of policy')
cy.get('tbody tr td').eq(23).should('have.text','2014.2.7')
})