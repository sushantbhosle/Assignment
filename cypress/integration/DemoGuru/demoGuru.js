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

Then('User should see appropriate validation message {string}', (message) => {
    cy.get('#login-form span b').should('have.text', message)
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
    cy.get('body b').eq(1).should('be.visible')
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

Then('User click on Logout', () => {
    cy.get('[value="Log out"]').click()
})

Then('User should see Login', () => {
    cy.get('.content h3').should('be.visible')
})


