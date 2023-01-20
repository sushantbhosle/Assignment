Feature: Validate the profile functionality

 validate the functionality for demo Guru99

    Scenario: Profile
        Given User navigated the demo Guru99 page
        When User enter email "sushantbhosle07@gmail.com" and password "Sushant@9697"
        And User click on Login button
        Then User click on Profile
        Then User should see Title, Firstname, Surname, Phone, Dataofbirth