'use strict';

angular.module('Assignment1App', [])
    .controller('Assignment1Controller1', ['$scope', function($scope) {
        $scope.dishes = '';
        $scope.message = '';
        $scope.CheckIfTooMuch = function() {
            var cleanedUpInput = $scope.dishes.replace(/\s+;/g, ';')
                .replace(/;\s+/g, ';')
                .replace(/;;/g, ';')
                .replace(/^;/g, '')
                .replace(/;$/g, '');

            if (cleanedUpInput === '') {
                $scope.message = 'Please enter data first';
                return;
            }

            var dishes = cleanedUpInput.split(';');

            if (dishes.length <= 3) {
                $scope.message = 'Enjoy!';
            } else {
                $scope.message = 'Too much!';
            }
        }
    }]);
