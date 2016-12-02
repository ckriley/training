var testingAngularApp = angular.module('testingAngularApp', []);

testingAngularApp.controller('testingAngularCtrl', function($rootScope, $scope){
    $scope.title = "Address App";
    
    
    //$scope.destinations = [];
    $scope.addresses = [];
    
    
    $scope.newAddress = {
        
        street:undefined,
        city:undefined,
        zipcode:undefined
    };
    
    
    $scope.addAddress = function() {
        $scope.addresses.push(
            {
                street: $scope.newAddress.street,
                city: $scope.newAddress.city,
                zipcode: $scope.newAddress.zipcode
            }
        
        );
    }
    
});