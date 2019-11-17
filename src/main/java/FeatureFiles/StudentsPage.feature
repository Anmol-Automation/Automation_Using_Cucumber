Feature: Students Page 

@regression
Scenario Outline: Create a student account 

	Given User is already on Login Page 
	When  User enters Username and Password 
	    | username               | password|  
		| admin_compro@myelt.com | thomson |
	Then  User clicks on LoginButton 
	Then  User is on HomePage 
	Then  User clicks on Students Tab 
	Then  User clicks on Create_Student_Account Tab 
	Then  User enters "<username>" and "<firstname>" and "<middlename>" and "<lastname>" and "<password>" and "<email>" 
	Then  User closes the browser
	
	Examples: 
	
		| username | firstname | middlename | lastname | password | email |
		| Test_4.28.5_Anmol221|  firstname | middlename | lastname | password | anmolaggarwal@qainfotech.com  |
		| Test_4.28.5_Anmol321|  firstname | middlename | lastname | password | anmolaggarwal@qainfotech.com |
		

@smoketest		
Scenario: Open the login Page		
		
		Given User is already on Login Page
		

@smoketest
Scenario: Open the login Page		
		
		Given User is already on Login Page
		When  User enters Username and Password 
	    | username               | password|  
		| admin_compro@myelt.com | thomson |
				
		
