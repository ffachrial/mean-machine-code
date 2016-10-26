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
        // create a user (accessed at POST http://localhost:8080/api/users)
        .post(function(req, res) {

            var user = new User();              // create a new instance of the User model
            user.name = req.body.name;          // set the users name (comes from the request)
            user.username = req.body.username;  // set the users username (comes from the request)
            user.password = req.body.password;  // set the users password (comes from the request)

            user.save(function(err) {
                if (err) {

                    // duplicate entry
                    if (err.code == 11000)
                        return res.json({ success: false, message: 'A user with that username already exists. '});
                    else
                        return res.send(err);
                }

                // return a message
                res.json({ message: 'User created!'});
            });
        })

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