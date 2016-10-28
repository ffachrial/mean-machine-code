angular.module('authService', [])

// ===================================================
// auth factory to login and get information
// inject $http for communicating with the API
// ===================================================

    .factory('Auth', function($http, AuthToken) {

        // create auth factory object
        var authFactory = {};

        // log a user in
        authFactory.login = function(username, password) {

            return $http.post('/api/authenticate', {
                username: username,
                password: password
            })
            .then(function(res) {
				AuthToken.setToken(res.data.token);
       			return res.data;
			});
        };

        // check if a user is logged in
        // checks if there is a local token
        authFactory.isLoggedIn = function() {
            if (AuthToken.getToken()) 
                return true;
            else
                return false;	
        };

        // return auth factory object
        return authFactory;

    })

// ===================================================
// factory for handling tokens
// inject $window to store token client-side
// ===================================================

    .factory('AuthToken', function($window) {

        var authTokenFactory = {};

        // get the token out of local storage
        authTokenFactory.getToken = function() {
            return $window.localStorage.getItem('token');
        };

        // function to set token or clear token
        // if a token is passed, set the token
        // if there is no token, clear it from local storage
        authTokenFactory.setToken = function(token) {
            if (token)
                $window.localStorage.setItem('token', token);
            else
                $window.localStorage.removeItem('token');
        };

        return authTokenFactory;
    });