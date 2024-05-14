Feature: User Authentication tests

Background:  // if we want to execute something first
   Given User navigates to the application
   And User Click on the login link


Scenario: Login should be success
    And User enter the username as "rahul_sharma"
    And User enter the password as "Stagingdemo@0403"
    When User click on the login button
    Then Login should be success


Scenario: Login should not be success
  Given User enter the username as "Rahul"
  Given User enter the password as "Sharma"
  When User click on the login button
  But Login should fail
 
