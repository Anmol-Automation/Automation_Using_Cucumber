Feature: Students Page

Scenario Outline: Create a student account

      Given User is already on Login Page
      When  User enters Username "admin_compro@myelt.com" and Password "thomson"
      Then  User clicks on LoginButton
      Then  User is on HomePage
      Then  User clicks on Students Tab
      Then  User clicks on Create_Student_Account Tab
      Then  User enters "<username>" and "<firstname>" and "<middlename>" and "<lastname>" and "<password>" and "<email>"
      
Examples:

      | username | firstname | middlename | lastname | password | email |
      | Test_4.28.5_Anmol1|  firstname | middlename | lastname | password | anmolaggarwal@qainfotech.com |
      
