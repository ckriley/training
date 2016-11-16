var loginPage = require('../pages/loginPage.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function() {

//Broadcast notifications

 this.Given(/^I login$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         loginPage.go('http://localhost:8090/FedLineCashWeb/WebContent/#/login');
         loginPage.enterUser('diUser');
         loginPage.enterAba('111111111');
         loginPage.submitTask();
       });

 this.When(/^I select the "([^"]*)" days radio button$/, function (arg1, callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });

  this.Then(/^I should see "([^"]*)" notifications$/, function (arg1, callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });

 

};
