angular.module('userApp', [
   'ngAnimate',            // add animation
    'app.routes',           // routing for application
   'authService',          
    'mainCtrl'//,
//   'userCtrl',
//   'userService'
])

// application configuration to integrate token into requests
.config(function($httpProvider) {

    // attach our auth interceptor to the http requests
    $httpProvider.interceptors.push('AuthInterceptor');

});