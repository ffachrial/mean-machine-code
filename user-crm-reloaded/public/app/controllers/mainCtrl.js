angular.module('mainCtrl', [])

    .controller('mainController', function($location) {

        var vm = this;

        // function to handle login form
        vm.doLogin = function() {

            // clear the error
            vm.error = '';

            // if a user successfully logs in, redirect to users page
            $location.path('/users');
        };

    });