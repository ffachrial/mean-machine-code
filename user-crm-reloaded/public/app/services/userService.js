angular.module('userService', [])

    .factory('User', function($http) {
        // log to make sure function being called
        console.log('loading userService');

        // create a new object
        var userFactory = {};

        // get all users
        userFactory.all = function() {
            return $http.get('/api/users/');
        };

        // return our entire userFactory object
        return userFactory;
        
    });