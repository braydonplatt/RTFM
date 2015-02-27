var app = angular.module('rtfmApp');
app.controller('loginCtrl', function($scope, mainService, $firebase){
    $scope.env = environmentService.getEnv();
})