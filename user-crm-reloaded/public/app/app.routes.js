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
            // same view as edit page
            .when('/users/create', {
                templateUrl : 'app/views/pages/users/single.html',
                controller  : 'userCreateController',
                controllerAs: 'user'
            })
            
            // page to edit a user
            .when('/users/:user_id', {
                templateUrl : 'app/views/pages/users/single.html',
                controller  : 'userEditController',
                controllerAs: 'user'
            });

        $locationProvider.html5Mode(true);

    });
