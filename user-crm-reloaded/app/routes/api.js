var User    = require('../models/user');    // call user model from user.js

module.exports = function(app, express) {

    // get an instance of the express router
    var apiRouter = express.Router();

    // test route to make sure everything is working
    // accessed at GET http://localhost:port_number/api
    apiRouter.get('/', function(req, res) {
        res.json({ message: 'hooray! welcome to our api!'});
    });
    
    // on routes that end in /users
    // ----------------------------------
    apiRouter.route('/users')

        // get all the users (accessed at GET http://localhost:port_number/api/users)
        .get(function(req, res) {
            User.find({}, function(err, users) {
                if (err) res.send(err);

                // return the users
                res.json(users);
            });
        });

    return apiRouter;
};