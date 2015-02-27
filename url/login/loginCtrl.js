var app = angular.module('rtfmApp');
app.controller('loginCtrl', function($scope, mainService, environmentService, $location){
    $scope.env = environmentService.getEnv();

    $scope.logMeIn = function(name) {
        alert(name)
        $location.path('/threads')
    }
})