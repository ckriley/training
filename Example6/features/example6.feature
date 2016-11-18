#features/test.feature
Feature: Running Cucumber with Protractor
    As a user of Protractor
    I should be able to use Cucumber
    In order to run my E2E tests

    Scenario: As a user of FedLine I want to login
        Given I login
        When I am on the Home Page and I select "General Information"
        Then I should see the Home Page
