(function() {
    'use strict';

    angular.module('Menu')
        .component('items', {
            templateUrl: 'src/menu/templates/items.template.html',
            bindings: {
                category: '<',
                items: '<'
            }
        });
})();
