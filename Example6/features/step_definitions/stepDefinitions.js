var loginPage = require('../pages/loginPage.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function() {

//Login Page

this.Given(/^I login to "([^"]*)" with user "([^"]*)" and aba "([^"]*)"$/, function (site, user, aba) {
         // Write code here that turns the phrase above into concrete actions
         loginPage.go(site);
         loginPage.enterUser(user);
         loginPage.enterAba(aba);
         loginPage.submitTask();
       });

this.When(/^I am on the Home Page and I select "([^"]*)"$/, function (arg1) {
         // Write code here that turns the phrase above into concrete actions
          element(by.linkText(arg1)).click();
          element(by.linkText('About This Service')).click();
       });

this.Then(/^I should see the Home Page$/, function () {
         // Write code here that turns the phrase above into concrete actions
         
       });


 

};
