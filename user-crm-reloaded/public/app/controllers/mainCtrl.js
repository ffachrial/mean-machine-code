angular.module('mainCtrl', [])

    .controller('mainController', function($rootScope, $location, Auth) {

        var vm = this;

        // get info if a person is logged in
        vm.loggedIn = Auth.isLoggedIn();

        // check to see if a user is logged in on every request
        $rootScope.$on('$routeChangeStart', function() {
            vm.loggedIn = Auth.isLoggedIn();	

		// get user information on page load
		Auth.getUser()
			.then(function(data) {
				vm.user = data.data;
			});	

        });	

        // function to handle login form
        vm.doLogin = function() {

            // clear the error
            vm.error = '';

            Auth.login(vm.loginData.username, vm.loginData.password)
                .then(function(data) {
                    // if a user successfully logs in, redirect to users page
                    if (data.success)
                        $location.path('/users');
                    else
                        vm.error = data.message;
                });
        };

    });