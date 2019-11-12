#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template


Feature: MyElt Login Page Test

# Reading data from scenario Without using examples keyword 
#Scenario: MyELT Login Scenario
#			Given User is already on Login Page
#      When  User enters Username "admin_compro@myelt.com" and Password "thomson"
#     Then  User clicks on LoginButton
#      Then  User is on HomePage  


# With Examples Keyword

Scenario Outline: MyELT Login Scenario
			Given User is already on Login Page
      When  User enters Username "<username>" and Password "<password>"
      Then  User clicks on LoginButton
      Then  User is on HomePage  

Examples:

     | username | password |
     | admin_compro@myelt.com | thomson |
     | admin_compro@myelt.com | thomson |
