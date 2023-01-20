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

Then('User click on Edit Profile', () => {
    cy.get('#ui-id-5').click()
})

Then('User should see Edit Profile Title {string}', (title) => {
    cy.get('#tabs-5 h1').should('have.text', title)
})

Then('User enter the Surname {string}, Firstname {string}, Phone {string}, Street {string}, City {string}, Country {string}, Postal Code {string}', (Surname, Firstname, Phone, Street, City, Country, postalCode) => {
    cy.get('#user_surname').type(Surname)
    cy.get('#user_firstname').type(Firstname)
    cy.get('#user_phone').type(Phone)
    cy.get('#user_address_attributes_street').type(Street)
    cy.get('#user_address_attributes_city').type(City)
    cy.get('#user_address_attributes_county').type(Country)
    cy.get('#user_address_attributes_postcode').type(postalCode)
})

Then('User click on Update User', () => {
    cy.get('[value="Update User"]').click()
})