# features/fedline.feature
Feature: Example feature
  As a user I want to submit a cash order form using FIT currency
   
 
  Scenario: Submit FIT Cash Order
    Given I login to "http://localhost:8090/FedLineCashWeb/WebContent/#/login" and I go to the Cash Order Page
    When I select endpoint "1111111110001 FIRST PEOPLES BANK, INC.: FRB FIRST PEOPLES BANK, INC.", Carrier "abc", Destination "11/07/2017", FIT Cash Value "1000", Total Amount "1000"
    And I submit the order
    Then I should see "1000" in the Confirmation Page
