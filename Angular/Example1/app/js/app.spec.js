describe('Testing AngularJS Test Suite', function(){
    
    beforeEach(module('testingAngularApp'));
    
    describe('Testing AngularJS Controller', function() {
        
         var scope, ctrl;
        
        beforeEach(inject(function($controller, $rootScope) {
                scope = $rootScope.$new();
                ctrl = $controller('testingAngularCtrl', {$scope:scope});
            }));
        
        afterEach(function(){
                  //cleanup code
                  });
        
        it('should initialize the title in the scope', function() {
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe('Address App');
            
        });
        
        it('should add two addresses to the address list', function(){
            
            expect(scope.addresses).toBeDefined();
            expect(scope.addresses.length).toBe(0);
            
            scope.newAddress = {
                street: "100 Park Ave",
                city: "New York",
                zipcode: "10001"
                
            }
            
            scope.addAddress();
            
            expect(scope.addresses.length).toBe(1);
            expect(scope.addresses[0].street).toBe("100 Park Ave");
            expect(scope.addresses[0].city).toBe("New York");
            expect(scope.addresses[0].zipcode).toBe("10001");
            
            scope.newAddress.street = "1 Wall Street"
            scope.newAddress.city = "New York";
            scope.newAddress.zipcode = "10001";
            scope.addAddress();
            
            expect(scope.addresses.length).toBe(2);
            expect(scope.addresses[1].street).toBe("1 Wall Street");
            expect(scope.addresses[1].city).toBe("New York");
            expect(scope.addresses[1].zipcode).toBe("10001");
        });
    });
    
    
    
});