@smoke 
Feature: Login to application and validate checkout feature

  @login
  Scenario: Successful login
    Given I am on the login page
    When I login with username "standard_user" and password "secret_sauce"
    Then I should see the homepage

  @checkout
  Scenario: Add three products and checkout sucessfully
    Given I am on the login page
    When I login with username "standard_user" and password "secret_sauce"
    And I add multiple prodcuts to cart
    And I add address "First Name, Second Name, 123456" and continue
    Then I verify the total amount "103.65" and finish
