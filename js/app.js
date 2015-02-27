angular.module('rtfmApp', ['firebase', 'ngRoute' ])
    .config(function($routeProvider){
        $routeProvider
            .when('/login', {
                templateUrl: '/url/login/loginView.html',
                controller: 'loginCtrl'
            })
            .when('/threads',{
                templateUrl: '/url/threads/threadsView.html',
                controller: 'threadsCtrl'
            })
            .when('/threads/:threadId',{
                templateUrl: '/url/threadsId/threadIdView.html',
                controller: 'threadIdCtrl'
            })
            .otherwise({
                redirectTo: '/login'
            })
    })
    .run(function($rootScope, $location, environmentService){

    })