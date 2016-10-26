angular.module('userCtrl', ['userService'])

    .controller('userController', function(User) {

        var vm = this;

        // grab all the users at page load
        User.all()
            .then(function(res) {

                // bind the users that come back to vm.users
                vm.users = res.data;

            });
    });