# features/fedline.feature
Feature: Example feature
  As a user I want to submit a cash order form using FIT currency
   
 
  Scenario: Submit FIT Cash Order
    Given I am on the Cash Order page
    When I select endpoint "AAA", Carrier "BBB", Destination "CCC", FIT Cash Value 1000.00, Total Amount 1000.00
    And I submit the order
    Then I should see "1000" in the Confirmation Page
