var loginPage = require('../pages/loginPage.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function() {

 
this.Given(/^I login to "([^"]*)" and I go to the Cash Order Page$/, function (site) {
         // Write code here that turns the phrase above into concrete actions
         loginPage.go(site);
         loginPage.enterUser('diUser');
         loginPage.enterAba('111111111');
         loginPage.submitTask();
         
         element(by.linkText('FedCash Order')).click();
         element(by.linkText('Order Form')).click();
         
          

        

       });

this.When(/^I select endpoint "([^"]*)", Carrier "([^"]*)", Destination "([^"]*)", FIT Cash Value "([^"]*)", Total Amount "([^"]*)"$/, function (arg1, arg2, arg3, arg4, arg5) {
         // Write code here that turns the phrase above into concrete actions
         //element(by.id('endpoint_text')).sendKeys('1111111111111');
         //element(by.cssContainingText('option', '1111111110001 FIRST PEOPLES BANK, INC.: FRB FIRST PEOPLES BANK, INC.')).click();
         //element(by.cssContainingText('option', 'abc')).click(); 
         //element(by.cssContainingText('option', '11/07/2017')).click(); 
         //element(by.id('one')).sendKeys('1000');
         //element(by.id('totalorder')).sendKeys('1000');
         //element(by.buttonText('Submit')).click(); 

         element(by.cssContainingText('option', arg1)).click();
         element(by.cssContainingText('option', arg2)).click(); 
         element(by.cssContainingText('option', arg3)).click(); 
         element(by.id('one')).sendKeys(arg4);
         element(by.id('totalorder')).sendKeys(arg5);
          

       });

this.When(/^I submit the order$/, function () {
         // Write code here that turns the phrase above into concrete actions
         element(by.buttonText('Submit')).click();
       });

this.Then(/^I should see "([^"]*)" in the Confirmation Page$/, function (arg1) {
         // Write code here that turns the phrase above into concrete actions
         //some chai code here checking the confirmation page

         var total = browser.findElement(by.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[2]/div[4]/div[2]')).getText();
         expect(total).to.eventually.equal(arg1);
       });

};
