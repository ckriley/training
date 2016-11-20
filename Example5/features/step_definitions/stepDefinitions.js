var loginPage = require('../pages/loginPage.js');
var cashOrderPage = require('../pages/cashOrderPage.js');
var cashOrderConfirmationPage = require('../pages/cashOrderConfirmationPage.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function() {

 
this.Given(/^I login and I am on the cash order confirmation screen$/, function () {
         // Write code here that turns the phrase above into concrete actions
         loginPage.go('http://localhost:8090/FedLineCashWeb/WebContent/#/login');
         loginPage.enterUser('diUser');
         loginPage.enterAba('111111111');
         loginPage.submitTask();
         element(by.linkText('FedCash Order')).click();
         element(by.linkText('Order Form')).click();
         cashOrderPage.enterOrder('1000','1000');


       });

this.When(/^I select submit another order$/, function () {
         // Write code here that turns the phrase above into concrete actions
         cashOrderPage.submitOrder();
         cashOrderConfirmationPage.enterAnotherOrder();
       });

this.Then(/^I should see Cash Order screen$/, function () {
         // Write code here that turns the phrase above into concrete actions
         //callback(null, 'pending');
       });

};