module.exports = function(app, express) {

    // get an instance of the express router
    var apiRouter = express.Router();

    // test route to make sure everything is working
    // accessed at GET http://localhost:port_number/api
    apiRouter.get('/', function(req, res) {
        res.json({ message: 'hooray! welcome to our api!'});
    });
    
    return apiRouter;
};