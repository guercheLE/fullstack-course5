(function() {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective);

    NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
    function NarrowItDownController($scope, menuSearchService) {
        $scope.searchTerm = "";
        $scope.found = [];
        $scope.getItems = function() {
            $scope.found = menuSearchService.getMatchedMenuItems($scope.searchTerm);
            console.log('#1 - $scope.found', $scope.found);
        }; 
        $scope.removeItem = function(index) {
            $scope.found.splice(index, 1);
            console.log('#2 - $scope.found', $scope.found);
        };
        console.log('#3 - $scope', $scope);
    };

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function(searchTerm) {
            console.log('#4 - searchTerm', searchTerm);
            return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json').then(function(response) {
                var items = response.data.menu_items;
                console.log('#5 - items', items);
                var foundItems = [];

                for (var i = 0; i < items.length; i++) {
                    if (items[i].name.indexOf(searchTerm) !== -1) {
                        foundItems.push(items[i]);
                    }
                }

                console.log('#6 - foundItems', foundItems);
                return foundItems;
            });
        }
    };

    function FoundItemsDirective() {
        var ddo = {
            restrict: "E",
            templateUrl: 'foundItems.html',
            scope: {
                foundItems: '<',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'fidctrl',
            bindToController: true
        };

        console.log('#7 - ddo', ddo);
        return ddo;
    };

    FoundItemsDirectiveController.$inject = ['$scope'];
    function FoundItemsDirectiveController($scope) {
        console.log('#8 - $scope', $scope);
    };
})();
