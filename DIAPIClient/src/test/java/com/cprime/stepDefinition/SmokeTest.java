package com.cprime.stepDefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.http.ContentType;
import org.junit.Assert;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

/**
 * Created by criley on 11/8/16.
 */
public class SmokeTest {

    String userID = "";
    String abaNumber = "";
    String messageAge = "";

    @Given("^an application sends an API request for userInfo$")
    public void an_application_sends_an_API_request_for_userInfo() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("In @Given method");


        //throw new PendingException();
    }

    @When("^application provides a userId of \"([^\"]*)\"$")
    public void application_provides_a_userId_of_userId(String userId) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("In @When method");
        userID = userId;
        //given().when().get("http://localhost:8080/v1/di/userInfo/" + userId).then().statusCode(200);


        //end of code
        //throw new PendingException();
    }

    @Then("^the application should receive a response with \"([^\"]*)\" and \"([^\"]*)\"$")
    public void the_application_should_receive_a_response_with_userId_and_userName(String userId, String userName) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("In @Then method");
        //given().when().get("http://localhost:8080/v1/di/userInfo/").then().body("$[0].userID",equalTo("string"));
        //given().when().get("http://localhost:8080/v1/di/userInfo/" + userId).then().statusCode(200);
        //String json = given().when().get("http://localhost:8080/v1/di/userInfo/123").asString();
        //System.out.println("JSON is: " + json);
        given().when().get("http://localhost:8080/v1/di/userInfo/" + userID).then().body("[0].userID",equalTo(userId)).body("[0].userName",equalTo(userName));
        //throw new PendingException();
    }

    @Then("^the application should receive a response under \"([^\"]*)\" ms$")
    public void the_application_should_receive_a_response_under_ms(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("In @Then method");
        long timeVal = new Integer(arg1);

        given().when().get("http://localhost:8080/v1/di/userInfo").then().time(lessThan(timeVal));

        //throw new PendingException();
    }

    @Given("^an application sends an API request for cashOrderCreationParam$")
    public void an_application_sens_an_API_request_for_cashOrderCreationParam() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
    }

    @When("^application provides a userId of \"([^\"]*)\" and an ABA Number of \"([^\"]*)\"$")
    public void application_provides_a_userId_of_and_an_ABA_Number_of(String arg1, String arg2) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        userID = arg1;
        abaNumber = arg2;

        //throw new PendingException();
    }

    @Then("^the application should receive an endpoint response that includes \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
    public void the_application_should_receive_an_endpoint_response_that_includes_and_and(String arg1, String arg2, String arg3) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        given().when().get("http://localhost:8080/v1/di/cashOrderCreationParam/" + userID + "/" + abaNumber).then().body("endpoint[0].branchOfficeName",equalTo(arg1)).body("endpoint[1].branchOfficeName",equalTo(arg2)).body("endpoint[2].branchOfficeName",equalTo(arg3));
        //throw new PendingException();
    }

    @Given("^an application sends an API request for notifications$")
    public void an_application_sends_an_API_request_for_notifications() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("In @Given method");
    }

    @When("^application provides a userId of \"([^\"]*)\" an ABA Number of \"([^\"]*)\" and a messageAge of \"([^\"]*)\"$")
    public void application_provides_a_userId_of_an_ABA_Number_of_and_a_messageAge_of(String arg1, String arg2, String arg3) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        userID = arg1;
        abaNumber = arg2;
        messageAge = arg3;
        System.out.println("In @When method");
    }

    @Then("^the application should receive \"([^\"]*)\" notifications$")
    public void the_application_should_receive_notifications(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
        int size = given().when().get("http://localhost:8080/v1/di/broadCastMessage/" + userID + "/" + abaNumber + "/" + messageAge).then().contentType(ContentType.JSON).extract().path("$.size()");
        System.out.println("Number of messages returned is: " + size);
        //assertion here
        Assert.assertEquals(new Long(size),new Long(arg1));

        System.out.println("In @Then method");
    }

}

