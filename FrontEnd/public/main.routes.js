angular.module("App").config(['$routeProvider','$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.when('/',{
          templateUrl:'login.html',
            controller:'LoginController'
        });

        $locationProvider.html5Mode(true);
    }]);