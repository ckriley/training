#features/example1.feature
Feature: As a Fedline user I want to login 

    Scenario: Valid User 
        Given I go to "http://fedline/FedLineCashWeb/WebContent/#/login"
        When I enter the user "diClient"
        And the ABA Number "111111111"
        And click the button Sign In
        Then I should see the Fedline Home Page
