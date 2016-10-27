angular.module('authService', [])

// ===================================================
// auth factory to login and get information
// inject $http for communicating with the API
// ===================================================

    .factory('Auth', function($http) {

        // create auth factory object
        var authFactory = {};

        // log a user in
        authFactory.login = function(username, password) {

            return $http.post('/api/authenticate', {
                username: username,
                password: password
            });
        };

        // return auth factory object
        return authFactory;

    });