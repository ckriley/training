'use strict';
module.exports = {
  //locators	
  cashOrderConfirmationPage: {
    
    orderSubmitButton: element(by.buttonText('Enter Another Order')),

  },

  enterAnotherOrder: function() {
    var anotherOrder = this.cashOrderConfirmationPage;
    anotherOrder.orderSubmitButton.click();
    
  }

};