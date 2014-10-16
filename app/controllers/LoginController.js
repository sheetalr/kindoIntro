(function () {
    'use strict';

    alphaApp.controller('LoginController', ['$scope', 'spManager', LoginController]);

    function LoginController($scope, spManager) {
        
        $scope.isLoggedIn = false;
        $scope.username = "";
        $scope.password = "";
        
        $scope.login = function(){
            spManager.login($scope.username, $scope.password, function(){
                $scope.$apply(function(){
                    
                    $scope.isLoggedIn = true;
                });
            });
        };
        
        $scope.logout = function(){
            $scope.isLoggedIn = false;
            spManager.logout();
        };
    }
})();

