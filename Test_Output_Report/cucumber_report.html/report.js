$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/C:/Users/Anmol%20Aggarwal/eclipse-workspace/NaveenAutomationLabs/AutomationUsingCucumber/src/main/java/FeatureFiles/StudentsPage.feature");
formatter.feature({
  "name": "Students Page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Create a student account",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters Username \"admin_compro@myelt.com\" and Password \"thomson\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on LoginButton",
  "keyword": "Then "
});
formatter.step({
  "name": "User is on HomePage",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on Students Tab",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on CreateStudentAccount Tab",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cfirstname\u003e\" and \"\u003cmiddlename\u003e\" and \"\u003clastname\u003e\" and \"\u003cpassword\u003e\" and \"\u003cemail\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "firstname",
        "middlename",
        "lastname",
        "password",
        "email"
      ]
    },
    {
      "cells": [
        "Test_4.28.5_Anmol1",
        "firstname",
        "middlename",
        "lastname",
        "password",
        "anmolaggarwal@qainfotech.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Create a student account",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "User enters Username \"admin_compro@myelt.com\" and Password \"thomson\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_Username_and_Password(String,String)"
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
formatter.step({
  "name": "User clicks on Students Tab",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentsPageStepDefinition.ClickOnStudent_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on CreateStudentAccount Tab",
  "keyword": "And "
});
formatter.match({
  "location": "StudentsPageStepDefinition.ClickOnCreateStudentAccount_Tab()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Create Student Account\u0027)]\"}\n  (Session info: chrome\u003d78.0.3904.97)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-TEMHAD3\u0027, ip: \u0027192.168.43.56\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.97, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\ANMOLA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58702}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: c1c6b9d341a5dff8e4f1fb0bebd6e462\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Create Student Account\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinitions.StudentsPageStepDefinition.ClickOnCreateStudentAccount_Tab(StudentsPageStepDefinition.java:22)\r\n\tat ✽.User clicks on CreateStudentAccount Tab(file:/C:/Users/Anmol%20Aggarwal/eclipse-workspace/NaveenAutomationLabs/AutomationUsingCucumber/src/main/java/FeatureFiles/StudentsPage.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User enters \"Test_4.28.5_Anmol1\" and \"firstname\" and \"middlename\" and \"lastname\" and \"password\" and \"anmolaggarwal@qainfotech.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentsPageStepDefinition.User_Enter_Details(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
});