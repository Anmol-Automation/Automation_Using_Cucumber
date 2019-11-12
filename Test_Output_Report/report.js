$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/C:/Users/Anmol%20Aggarwal/eclipse-workspace/NaveenAutomationLabs/AutomationUsingCucumber/src/main/java/FeatureFiles/Login.feature");
formatter.feature({
  "name": "MyElt Login Page Test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "MyELT Login Scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.User_On_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Username and Password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_Username_and_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on LoginButton",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_LoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on HomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_HomePage()"
});
formatter.result({
  "status": "passed"
});
});