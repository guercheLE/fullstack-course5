(function() {
    'use strict';

    angular.module('Menu')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['items'];
    function ItemsController(items) {
        var itemsCtrl = this;

        itemsCtrl.category = items.data.category;
        itemsCtrl.items = items.data.menu_items;
    };
})();
