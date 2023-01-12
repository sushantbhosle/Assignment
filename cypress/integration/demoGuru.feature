Feature: Validate the Quotation to a registered Insurance customer

    validate the functionality for demo Guru99

    Scenario: Login failure{Invalid credentials}
        Given User navigated the demo Guru99 page
        When User enter email "sushantbhosle07@gmail.com" and password "ssdss123"
        And User click on Login button
        Then User should see appropriate validation message "Enter your Email address and password correct"

    Scenario: Login success{Valid credentials}
        Given User navigated the demo Guru99 page
        When User enter email "sushantbhosle07@gmail.com" and password "Sushant@9697"
        And User click on Login button
        Then User should navigated to HomePage

    Scenario: Request Quotation
        Given User navigated the demo Guru99 page
        When User enter email "sushantbhosle07@gmail.com" and password "Sushant@9697"
        And User click on Login button
        Then User click on Request Quotation
        Then User should see Request Quotation Title "Request a quotation"
        And User enter the Incident "1",Registration "2", Annual mileage "3", Estimated value "4", Parking Location "Street/Road"
        Then User click on Save Quotation
        Then User should see Identification Number

    Scenario: Retrieve Quotation
        Given User navigated the demo Guru99 page
        When User enter email "sushantbhosle07@gmail.com" and password "Sushant@9697"
        And User click on Login button
        Then User click on Retrieve Quotation
        Then User should see Retrieve
        And User enter the Identification Number "20350"
        Then User click on Retrieve
        Then User should see Retrieve Quotation

    Scenario: Profile
        Given User navigated the demo Guru99 page
        When User enter email "sushantbhosle07@gmail.com" and password "Sushant@9697"
        And User click on Login button
        Then User click on Profile
        Then User should see Title, Firstname, Surname, Phone, Dataofbirth

    Scenario: Edit Profile
        Given User navigated the demo Guru99 page
        When User enter email "sushantbhosle07@gmail.com" and password "Sushant@9697"
        And User click on Login button
        Then User click on Edit Profile
        Then User should see Edit Profile Title "Editing user profile"
        Then User enter the Surname "Bhosle", Firstname "Sushant", Phone "9860306437", Street "4", City "Pune", Country "India", Postal Code "411027"
        Then User click on Update User

    Scenario: Logout
        Given User navigated the demo Guru99 page
        When User enter email "sushantbhosle07@gmail.com" and password "Sushant@9697"
        And User click on Login button
        Then User should navigated to HomePage
        Then User click on Logout
        Then User should see Login

