angular.module('mainCtrl', [])

    .controller('mainController', function($location, Auth) {

        var vm = this;

        // function to handle login form
        vm.doLogin = function() {

            // clear the error
            vm.error = '';

            Auth.login(vm.loginData.username, vm.loginData.password)
                .then(function(res) {
                    // if a user successfully logs in, redirect to users page
                    if (res.data.success)
                        $location.path('/users');
                    else
                        vm.error = res.data.message;
                });
        };

    });