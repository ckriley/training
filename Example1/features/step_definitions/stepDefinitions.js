var loginPage = require('../pages/loginPage.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function() {

//Login Page

this.Given(/^I go to "([^"]*)"$/, function (site) {
         // Write code here that turns the phrase above into concrete actions
         browser.get(site);
         //loginPage.go(site);
       });

this.When(/^I enter the user "([^"]*)"$/, function (arg1) {
         // Write code here that turns the phrase above into concrete actions
         element(by.id('loginId')).sendKeys(arg1);
         //loginPage.enterUser(arg1);
       });

 this.When(/^the ABA Number "([^"]*)"$/, function (arg1) {
         // Write code here that turns the phrase above into concrete actions
         element(by.id('aba')).sendKeys(arg1);
          //loginPage.enterAba(arg1);
       });

 this.When(/^click the button Sign In$/, function () {
         // Write code here that turns the phrase above into concrete actions
         element(by.buttonText('Sign in')).click();
          //loginPage.submitTask();
       });

 this.Then(/^I should see the Fedline Home Page$/, function () {
         // Write code here that turns the phrase above into concrete actions
         var home = element(by.linkText('General Information')).getText();
         console.log("home is: " + home);
         expect(home).to.eventually.equal('General Information');
         
       });


 

};
