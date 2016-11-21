#features/example1.feature
Feature: Running Cucumber with Protractor
    As a user of Protractor
    I should be able to use Cucumber
    In order to run my E2E tests

    Scenario: As a user of FedLine I want to login
        Given I go to "http://localhost:8090/FedLineCashWeb/WebContent/#/login"
        When I enter the user "diClient"
        And the ABA Number "111111111"
        And click the button Sign In
        Then I should see the Fedline Home Page
