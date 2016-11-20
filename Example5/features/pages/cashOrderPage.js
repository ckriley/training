'use strict';
module.exports = {
  //locators	
  cashOrderPage: {
    fedCashLink: element(by.linkText('FedCash Order')),
    orderFormLink: element(by.linkText('Order Form')),
    endpointSelect: element(by.cssContainingText('option', '1111111110001 FIRST PEOPLES BANK, INC.: FRB FIRST PEOPLES BANK, INC.')),
    carrierSelect: element(by.cssContainingText('option', 'abc')), 
    destinationSelect: element(by.cssContainingText('option', '11/07/2017')), 
    currencyAmount: element(by.id('one')),
    totalOrderAmount: element(by.id('totalorder')),
    orderSubmitButton: element(by.buttonText('Submit')),

  },

  enterOrder: function(arg1,arg2) {
    var order = this.cashOrderPage;
    order.endpointSelect.click();
    order.carrierSelect.click();
    order.destinationSelect.click();
    order.currencyAmount.sendKeys(arg1);
    order.totalOrderAmount.sendKeys(arg2);
    
  },

  submitOrder: function() {
    var order = this.cashOrderPage;
    order.orderSubmitButton.click();
  }

};