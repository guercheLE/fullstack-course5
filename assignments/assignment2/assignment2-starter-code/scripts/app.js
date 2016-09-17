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
        this.toBuyList = shoppingListCheckOffService.getToBuyList();

        this.moveToAlreadyBoughtList = function(index) {
            shoppingListCheckOffService.moveToAlreadyBoughtList(index);
        }
    };

    /*
     * AlreadyBoughtShoppingController
     */
    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtShoppingController(shoppingListCheckOffService) {
        this.alreadyBoughtList = shoppingListCheckOffService.getAlreadyBoughtList();
    };

    /*
     * ShoppingListCheckOffService
     */
    function ShoppingListCheckOffService() {
        this.toBuyList = [
            { name: "cookies", quantity: 10 },
            { name: "sugar", quantity: 11 },
            { name: "hazzelnut", quantity: 12 },
            { name: "chocolate", quantity: 13 }
        ];

        this.getToBuyList = function() {
            return this.toBuyList
        };

        this.alreadyBoughtList = [];

        this.getAlreadyBoughtList = function() {
            return this.alreadyBoughtList;
        }

        this.moveToAlreadyBoughtList = function(index) {
            this.alreadyBoughtList.push({ name: this.toBuyList[index].name, quantity: this.toBuyList[index].quantity });
            this.toBuyList.splice(index, 1);
        };
    };
})();
