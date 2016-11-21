var loginPage = require('../pages/loginPage.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function() {

//Broadcast notifications

 this.Given(/^I login$/, function () {
         // Write code here that turns the phrase above into concrete actions
         loginPage.go('http://localhost:8090/FedLineCashWeb/WebContent/#/login');
         loginPage.enterUser('diUser');
         loginPage.enterAba('111111111');
         loginPage.submitTask();
       });

 this.When(/^I select the "([^"]*)" days radio button$/, function (arg1) {
         // Write code here that turns the phrase above into concrete actions
         element(by.cssContainingText('label.radio-inline', '14 days ago')).click();
       });

  this.Then(/^I should see "([^"]*)" notifications$/, function (arg1) {
         // Write code here that turns the phrase above into concrete actions
         //assert that there is arg1 notifications
         //expect(element.all(by.repeater('app in userApps')).count()).toEqual(4);
         //expect(element.all(by.repeater('bcvm.bcmessages')).count()).to.equal(arg1);
         //console.log(element.all(by.repeater("msg in bcvm.bcmessages")).length);
         
         var notifications = element.all(by.repeater("msg in bcvm.bcmessages"));
         expect(notifications.count()).to.eventually.equal(Number(arg1));

       });

 

};
