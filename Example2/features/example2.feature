#features/example2.feature
Feature: As a user of FedLine I want to check Notifications for the past 14 days

    # Use Page Object for the login screen
    # ng-repeat shows the number of messages
    Scenario: Check 14 days returns 2 messages 
        Given I login
        When I select the "14" days radio button
        Then I should see "2" notifications
