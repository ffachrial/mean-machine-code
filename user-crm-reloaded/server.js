// BASE SETUP
// ======================================

// CALL THE PACKAGES --------------------
var express     = require('express');   	// call express
var app         = express();            	// define app using express
var bodyParser	= require('body-parser');	// get body-parser
var path        = require('path');      	// used for delimiter '/'
var config      = require('./config');  	// call config for parameters
var mongoose    = require('mongoose');  	// call mongoose for database connection
var morgan		= require('morgan');

// APP CONFIGURATION ====================
// ======================================
// user body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

// configure our app to handle CORS requests
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

// log all requests to the console
app.use(morgan('dev'));

// DB CONFIGURATION =====================
// ======================================

// use mongoose.Promise for clear issue: mpromise is deprecated
mongoose.Promise = global.Promise;

// catch when error connect to mongodb
mongoose.connection.on('error', function(err) {
	console.log('Could not connect to MongoDB!');
});

// connect to our database (accessed at http://localhost:27017)
mongoose.connect(config.database);

// set static files location
// used for requests that our frontend will make
app.use(express.static(__dirname + '/public'));

// ROUTES FOR OUR API ===================
// ======================================

// API ROUTES----------------------------
var apiRoutes = require('./app/routes/api')(app, express);
app.use('/api', apiRoutes);

// MAIN CACTHALL ROUTE ------------------
// SEND USERS TO FRONTEND ---------------
// has to be registered after API ROUTES
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

// START THE SERVER
// ======================================
app.listen(config.port);
console.log('Listening on port ' + config.port);