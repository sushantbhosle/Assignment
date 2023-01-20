Feature: Validate the logout functionality

validate the functionality for demo Guru99

    Scenario: Logout
        Given User navigated the demo Guru99 page
        When User enter email "sushantbhosle07@gmail.com" and password "Sushant@9697"
        And User click on Login button
        Then User should navigated to HomePage
        Then User click on Logout
        Then User should see Login