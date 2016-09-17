(function() {
    'use strict';

    /*
     * ShoppingListCheckOff
     */
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyShoppingController', ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    /*
     * ToBuyShoppingController
     */
    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyShoppingController(shoppingListCheckOffService) {
        var self = this;

        self.toBuyList = shoppingListCheckOffService.toBuyList;
        self.moveToAlreadyBoughtList = shoppingListCheckOffService.moveToAlreadyBoughtList;
    };

    /*
     * AlreadyBoughtShoppingController
     */
    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtShoppingController(shoppingListCheckOffService) {
        var self = this;

        self.alreadyBoughtList = shoppingListCheckOffService.alreadyBoughtList;
    };

    /*
     * ShoppingListCheckOffService
     */
    function ShoppingListCheckOffService() {
        var self = this;

        self.toBuyList = [
            { name: "cookies", quantity: 10 },
            { name: "sugar", quantity: 11 },
            { name: "hazzelnut", quantity: 12 },
            { name: "chocolate", quantity: 13 }
        ];

        self.alreadyBoughtList = [];

        self.moveToAlreadyBoughtList = function(index) {
            var item = self.toBuyList.splice(index, 1)[0];
            self.alreadyBoughtList.push(item);
        };
    };
})();
