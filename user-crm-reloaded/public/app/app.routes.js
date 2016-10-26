angular.module('app.routes', ['ngRoute'])

    .config(function($routeProvider, $locationProvider) {

        $routeProvider

            // show all users
            .when('/users', {
                templateUrl : 'app/views/pages/users/all.html',
                controller  : 'userController',
                controllerAs: 'user'
            });

        $locationProvider.html5Mode(true);

    });
