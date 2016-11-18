var loginPage = require('../pages/loginPage.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function() {

this.Given(/^I go to "([^"]*)"$/, function (arg1, callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });


this.When(/^I enter the user "([^"]*)"$/, function (arg1, callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });

this.When(/^the ABA Number "([^"]*)"$/, function (arg1, callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });

this.When(/^click the button Sign In$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });

this.Then(/^I should see the Fedline Home Page$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });

this.Given(/^I am on the Cash Order page$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });

this.When(/^I select endpoint "([^"]*)", Carrier "([^"]*)", Destination "([^"]*)", FIT Cash Value (\d+)\.(\d+), Total Amount (\d+)\.(\d+)$/, function (arg1, arg2, arg3, arg4, arg5, arg6, arg7, callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });

this.When(/^I submit the order$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });

this.Then(/^I should see "([^"]*)" in the Confirmation Page$/, function (arg1, callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });

};
