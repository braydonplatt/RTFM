var app = angular.module('rtfmApp', ['ngRoute','firebase'])


    .config(function($routeProvider) {
        $routeProvider
            when('/login', {
                templateUrl: 'url/login/loginView.html',
                controller: 'loginCtrl'
            }).
            when('/threads', {
                templateUrl: 'url/threads/threadsView.html',
                controller: 'threadsCtrl'
            }).
            when('/threads/threadId', {
                templateUrl: 'url/threadId/threadIdView.html',
                controller: 'threadIdCtrl'
            }).
            otherwise({
                redirectTo: '/login'
            });
    });