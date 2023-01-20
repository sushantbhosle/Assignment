Feature: Validate the request Quotation functionality

 validate the functionality for demo Guru99
    
    Scenario: Request Quotation
        Given User navigated the demo Guru99 page
        When User enter email "sushantbhosle07@gmail.com" and password "Sushant@9697"
        And User click on Login button
        Then User click on Request Quotation
        Then User should see Request Quotation Title "Request a quotation"
        And User enter the Incident "1",Registration "2", Annual mileage "3", Estimated value "4", Parking Location "Street/Road"
        Then User click on Save Quotation
        Then User should see Identification Number