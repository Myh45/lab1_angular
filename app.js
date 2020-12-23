(function () {
    'use strict';
    angular.module('moduleApp', [])
        .controller('controller', controller);
    function controller($scope) {
        $scope.result = "";
        $scope.items = "";
        $scope.show = function () {
              var items = $scope.items.split(',');
            for (var i = items.length - 1; i >= 0; i--) {
                if (items[i].trim() === "") items.splice(i, 1);
            }
            if (items.length === 0) {
                $scope.result ="Будь ласка, уведіть дані";
            } else if (items.length <= 3) {
               $scope.result = "На здоров'я";
            } else {
               $scope.result = "Це забагато";
            }
        }
    }
})();