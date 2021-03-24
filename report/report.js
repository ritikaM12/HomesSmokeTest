$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/resources/Home.feature");
formatter.feature({
  "name": "Home",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Navigate from SRP to LDP",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Browser is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.TestScript.browser_is_opened()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to homepage",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.TestScript.user_is_navigated_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search a location",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.TestScript.user_search_location()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"HP-Norfolk, VA__0\"]\"}\n  (Session info: chrome\u003d89.0.4389.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-T5JSBBKE\u0027, ip: \u002710.72.3.149\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\ritik\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60857}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: cf9ff729d739c0a4b504ef75a780cc04\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"HP-Norfolk, VA__0\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepdefs.TestScript.user_search_location(TestScript.java:44)\r\n\tat ✽.user search a location(file:///F:/Automation/Local/Master/Homes/src/test/java/resources/Home.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user naviagted to SRP",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.TestScript.verify_SRP_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on any listing card",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.TestScript.click_listingcard()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigated to LDP",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.TestScript.verify_LDP()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Browser is closed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.TestScript.Browser_closed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify saved search",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Browser is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.TestScript.browser_is_opened()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to homepage",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.TestScript.user_is_navigated_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search a location",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.TestScript.user_search_location()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"HP-Norfolk, VA__0\"]\"}\n  (Session info: chrome\u003d89.0.4389.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-T5JSBBKE\u0027, ip: \u002710.72.3.149\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\ritik\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60978}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d07d01878d1d599939e73b9008ea700b\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"HP-Norfolk, VA__0\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepdefs.TestScript.user_search_location(TestScript.java:44)\r\n\tat ✽.user search a location(file:///F:/Automation/Local/Master/Homes/src/test/java/resources/Home.feature:16)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user naviagted to SRP",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.TestScript.verify_SRP_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on saved search button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.TestScript.click_saved_search_CTA()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "login pop appears",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TestScript.verify_login_popup()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter username and password in the input fields and click login CTA",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.TestScript.user_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user again click on save this search CTA",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Enter any name in saved search field click save search CTA",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.TestScript.enter_savedsearch_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Check notification for the save search",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});