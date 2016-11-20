'use strict';
module.exports = {
  //locators	
  loginPage: {
    userNameText: element(by.id('loginId')),
    abaText: element(by.id('aba')),
    submitButton: element(by.buttonText('Sign in'))
  },

  //methods
  go: function(site) {
    browser.get(site);
    browser.pause();
  },

  enterUser: function(task1) {
    var login = this.loginPage;

    login.userNameText.sendKeys(task1);
  },

  enterAba: function(task1) {
    var login = this.loginPage;

    login.abaText.sendKeys(task1);
  },

  submitTask: function() {
    var login = this.loginPage;
    login.submitButton.click();
  }

};