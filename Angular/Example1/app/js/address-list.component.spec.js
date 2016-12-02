describe('addressList', function(){
    
    beforeEach(module('testingAngularApp'));
    
    describe('AddressListController', function() {
        
        it('should return 2 addresses', inject(function($componentController) {
            var ctrl = $componentController('addressList');
            expect(ctrl.addresses.length).toBe(1);
            
        }));
        
    });

});