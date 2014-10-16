(function () {
    'use strict';

    alphaApp.controller('HomeController', ['$scope', HomeController]);

    function HomeController($scope) {
        
        $scope.loadScreen = function(item){
            app.application.navigate(item.href);
        };
    }
})();

