Feature: Validate the login with invalid credentials
validate the functionality for demo Guru99

    Scenario: Login failure{Invalid credentials}
        Given User navigated the demo Guru99 page
        When User enter email "sushantbhosle07@gmail.com" and password "ssdss123"
        And User click on Login button
        Then User should see appropriate validation message "Enter your Email address and password correct"
