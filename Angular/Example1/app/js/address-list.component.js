angular.
    module('testingAngularApp').
    component('addressList', {
        template: 
                '<div ng-repeat="address in $ctrl.addresses">' +
                '<span>{{address.street}},{{address.city}},{{address.zipcode}}</span>' +
                '</div>',
        controller: function AddressListController(){
            this.addresses = [
                {
                    street:"1 Madison Ave",
                    city:"New York",
                    zipcode:"10001"
                },
                {
                    street:"1 Wall Street",
                    city:"New York",
                    zipcode:"10001"
                }
            ];
        }
});