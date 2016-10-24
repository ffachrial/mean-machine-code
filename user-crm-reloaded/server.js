// BASE SETUP
// ======================================

// CALL THE PACKAGES --------------------
var express = require('express');   // call express
var app     = express();            // define app using express
var path    = require('path');      // used for delimiter '/'
var config  = require('./config');  // call config for parameters

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