# features/example5.feature
Feature: Example feature
  As a user I want to submit another cash order from the order confirmation screen
   
 
  Scenario: Submit Another Cash Order
    Given I login and I am on the cash order confirmation screen
    When I select submit another order
    Then I should see Cash Order screen
