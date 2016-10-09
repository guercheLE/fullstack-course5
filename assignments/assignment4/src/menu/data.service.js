(function() {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        var menuDataService = this;

        menuDataService.getAllCategories = function() {
            return $http.get('https://davids-restaurant.herokuapp.com/categories.json');
        };

        menuDataService.getItemsForCategory = function(categoryShortName) {
            return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName);
        };
    };
})();
