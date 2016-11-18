var loginPage = require('../pages/loginPage.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function() {

//Login Page

this.Given(/^I login$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });

this.When(/^I am on the Home Page and I select "([^"]*)"$/, function (arg1, callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });

this.Then(/^I should see the Home Page$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });


 

};
