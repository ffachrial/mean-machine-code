angular.module('userCtrl', ['userService'])

    .controller('userController', function(User) {

        var vm = this;

        // grab all the users at page load
        User.all()
            .then(function(res) {

                // bind the users that come back to vm.users
                vm.users = res.data;

            });
    })
    
    // controller applied to user creation page
    .controller('userCreateController', function(User) {

        var vm = this;

        // variable to hide/show elements of the view
        // differentiates between create or edit pages
        vm.type = 'create';

        // function to create a user
        vm.saveUser = function() {

            vm.message = '';

            // use the create function in the userService
            User.create(vm.userData)
                .then(function(res) {
                    vm.userData = {};
                    vm.message = res.data.message;
                });
        };
    })
    
    // controller applied to user edit page
    .controller('userEditController', function($routeParams, User) {

        var vm = this;

        // variable to hide/show elements of the view
        // differentiates between create or edit pages
        vm.type = 'edit';

        // get the user data for the user you want to edit
        // $routeParams is the way we grab data from the URL
        User.get($routeParams.user_id)
            .then(function(res) {
                vm.userData = res.data;
            });

        // function to save the user
        vm.saveUser = function() {
            vm.message = '';

            // call the userService function to update
            User.update($routeParams.user_id, vm.userData)
                .then(function(res) {

                    // clear the form
                    vm.userData = {};

                    // bind the message from our API to vm.message
                    vm.message = res.data.message;
                });
        };
    });