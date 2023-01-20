Feature: Validate the edit profile functionality


    Scenario: Edit Profile
        Given User navigated the demo Guru99 page
        When User enter email "sushantbhosle07@gmail.com" and password "Sushant@9697"
        And User click on Login button
        Then User click on Edit Profile
        Then User should see Edit Profile Title "Editing user profile"
        Then User enter the Surname "Bhosle", Firstname "Sushant", Phone "9860306437", Street "4", City "Pune", Country "India", Postal Code "411027"
        Then User click on Update User

