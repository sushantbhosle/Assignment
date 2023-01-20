Feature: Validate the  retrieve Quotation functionality

validate the functionality for demo Guru99

    Scenario: Retrieve Quotation
        Given User navigated the demo Guru99 page
        When User enter email "sushantbhosle07@gmail.com" and password "Sushant@9697"
        And User click on Login button
        Then User click on Retrieve Quotation
        Then User should see Retrieve
        And User enter the Identification Number "20350"
        Then User click on Retrieve
        Then User should see Retrieve Quotation
        Then User should see Insurance Name and Value
