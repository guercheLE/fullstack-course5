(function() {
    'use strict';

    angular.module('Menu')
        .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['categories'];
    function CategoriesController(categories) {
        var categoriesCtrl = this;
        categoriesCtrl.categories = categories.data;
    };
})();
