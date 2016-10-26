angular.module('app.routes', ['ngRoute'])

    .config(function($routeProvider, $locationProvider) {

        $routeProvider

            // show all users
            .when('/users', {
                templateUrl : 'app/views/pages/users/all.html',
                controller  : 'userController',
                controllerAs: 'user'
            })
            
            // form to create a new user
            .when('/users/create', {
                templateUrl : 'app/views/pages/users/single.html'
            });

        $locationProvider.html5Mode(true);

    });
