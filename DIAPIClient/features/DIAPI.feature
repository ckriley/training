@Smoke
Feature: Test the DI API

#Example 7
Scenario: Verify cashOrderCreationParam returns valid data
Given an application sends an API request for cashOrderCreationParam
When application provides a userId of "diUser" and an ABA Number of "111111111"
Then the application should receive an endpoint response that includes "FIRST PEOPLE BANK, INC." and "SECOND PEOPLES BANK, INC." and "THIRD PEOPLES BANK, INC."

#Example 8
Scenario: Verify userInfo returns valid data
Given an application sends an API request for userInfo
When application provides a userId of "criley"
Then the application should receive a response with "string" and "string"
And the application should receive a response under "200" ms

#Example 9
Scenario: Verify broadcastMessage returns two notifications
Given an application sends an API request for notifications
When application provides a userId of "diUser" an ABA Number of "111111111" and a messageAge of "7"
Then the application should receive "2" notifications