$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DIAPI.feature");
formatter.feature({
  "line": 2,
  "name": "Test the DI API",
  "description": "",
  "id": "test-the-di-api",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Verify cashOrderCreationParam returns valid data",
  "description": "",
  "id": "test-the-di-api;verify-cashordercreationparam-returns-valid-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "an application sends an API request for cashOrderCreationParam",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "application provides a userId of \"diUser\" and an ABA Number of \"111111111\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the application should receive an endpoint response that includes \"FIRST PEOPLE BANK, INC.\" and \"SECOND PEOPLES BANK, INC.\" and \"THIRD PEOPLES BANK, INC.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.an_application_sens_an_API_request_for_cashOrderCreationParam()"
});
formatter.result({
  "duration": 73685181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "diUser",
      "offset": 34
    },
    {
      "val": "111111111",
      "offset": 64
    }
  ],
  "location": "SmokeTest.application_provides_a_userId_of_and_an_ABA_Number_of(String,String)"
});
formatter.result({
  "duration": 1520764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FIRST PEOPLE BANK, INC.",
      "offset": 67
    },
    {
      "val": "SECOND PEOPLES BANK, INC.",
      "offset": 97
    },
    {
      "val": "THIRD PEOPLES BANK, INC.",
      "offset": 129
    }
  ],
  "location": "SmokeTest.the_application_should_receive_an_endpoint_response_that_includes_and_and(String,String,String)"
});
formatter.result({
  "duration": 1125097801,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nJSON path endpoint[0].branchOfficeName doesn\u0027t match.\nExpected: FIRST PEOPLE BANK, INC.\n  Actual: FIRST PEOPLES BANK, INC.\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:60)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:235)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:470)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:632)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:497)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\n\tat io.restassured.internal.ResponseSpecificationImpl.content(ResponseSpecificationImpl.groovy:264)\n\tat io.restassured.specification.ResponseSpecification$content$0.callCurrent(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:190)\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:247)\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:268)\n\tat com.cprime.stepDefinition.SmokeTest.the_application_should_receive_an_endpoint_response_that_includes_and_and(SmokeTest.java:84)\n\tat ✽.Then the application should receive an endpoint response that includes \"FIRST PEOPLE BANK, INC.\" and \"SECOND PEOPLES BANK, INC.\" and \"THIRD PEOPLES BANK, INC.\"(DIAPI.feature:7)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify userInfo returns valid data",
  "description": "",
  "id": "test-the-di-api;verify-userinfo-returns-valid-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "an application sends an API request for userInfo",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "application provides a userId of \"criley\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the application should receive a response with \"string\" and \"string\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the application should receive a response under \"200\" ms",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeTest.an_application_sends_an_API_request_for_userInfo()"
});
formatter.result({
  "duration": 719179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "criley",
      "offset": 34
    }
  ],
  "location": "SmokeTest.application_provides_a_userId_of_userId(String)"
});
formatter.result({
  "duration": 80679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "string",
      "offset": 48
    },
    {
      "val": "string",
      "offset": 61
    }
  ],
  "location": "SmokeTest.the_application_should_receive_a_response_with_userId_and_userName(String,String)"
});
formatter.result({
  "duration": 46440262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 49
    }
  ],
  "location": "SmokeTest.the_application_should_receive_a_response_under_ms(String)"
});
formatter.result({
  "duration": 50983550,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify broadcastMessage returns two notifications",
  "description": "",
  "id": "test-the-di-api;verify-broadcastmessage-returns-two-notifications",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "an application sends an API request for notifications",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "application provides a userId of \"diUser\" an ABA Number of \"111111111\" and a messageAge of \"7\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "the application should receive \"2\" notifications",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.an_application_sends_an_API_request_for_notifications()"
});
formatter.result({
  "duration": 51214,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "diUser",
      "offset": 34
    },
    {
      "val": "111111111",
      "offset": 60
    },
    {
      "val": "7",
      "offset": 92
    }
  ],
  "location": "SmokeTest.application_provides_a_userId_of_an_ABA_Number_of_and_a_messageAge_of(String,String,String)"
});
formatter.result({
  "duration": 95513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 32
    }
  ],
  "location": "SmokeTest.the_application_should_receive_notifications(String)"
});
formatter.result({
  "duration": 63592135,
  "status": "passed"
});
});