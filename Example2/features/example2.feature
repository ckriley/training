#features/test.feature
Feature: Running Cucumber with Protractor
    As a user of Protractor
    I should be able to use Cucumber
    In order to run my E2E tests

    # Use Page Object for the login screen
	# ng-repeat shows the number of messages
    Scenario: As a user of FedLine I want to check Notifications for the past 14 days
        Given I login
        When I select the "14" days radio button
        Then I should see "2" notifications
