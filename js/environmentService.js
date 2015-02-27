angular.module('rtfmApp')
    .service('environmentService', function($window) {
        return {
            getEnv: function () {
                return $window.env;
            }
        }
    });