package com.cprime.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by criley on 11/8/16.
 */
@RunWith(Cucumber.class)
@CucumberOptions(features="features",glue={"com.cprime.stepDefinition"},plugin={"html:target/cucumber-html-report"},tags="@Smoke")
public class TestRunnerNew {
}
