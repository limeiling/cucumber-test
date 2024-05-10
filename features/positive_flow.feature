Feature: Positive Flow Testing

  Scenario: Sign in with valid credentials
    Given I am on the homepage
    When I sign in with valid credentials
    Then I should be logged in successfully

  Scenario: Add product to cart and proceed to checkout
    Given I am logged in
    When I add a product to the cart
    And I proceed to checkout
    Then I should see the checkout page
  
  Scenario: Sign in with invalid credentials
    Given I am on the homepage
    When I sign in with invalid credentials
    Then I should see an error message
