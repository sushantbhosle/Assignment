Feature: Validate the login with valid credentials

validate the functionality for demo Guru99

    Scenario: Login success{Valid credentials}
        Given User navigated the demo Guru99 page
        When User enter email "sushantbhosle07@gmail.com" and password "Sushant@9697"
        And User click on Login button
        Then User should navigated to HomePage