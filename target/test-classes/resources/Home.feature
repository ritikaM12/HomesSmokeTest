Feature: Home

Scenario: Navigate from SRP to LDP
Given Browser is opened 
When user is navigated to homepage
Then user search a location
Then user naviagted to SRP
Then user click on any listing card
Then user navigated to LDP
Then Browser is closed


Scenario: Verify saved search
Given Browser is opened 
When user is navigated to homepage
Then user search a location
Then user naviagted to SRP
Then Click on saved search button
And login pop appears
Then enter username and password in the input fields and click login CTA
Then user again click on save this search CTA
Then Enter any name in saved search field click save search CTA
Then Check notification for the save search