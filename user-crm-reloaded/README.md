# H2 Introduction
First weeks of the October 2016 I followed the course of the ME_N Stack (not included the 'A' for Angular). The course was great,
but in the end, I still want to completely the MEAN Stack. So continue learning by looking for tutorial from internet and tried
to create simple application. It doesnt work anyway. 

I'm tried to use different approach. Last time I got failed when try connecting from Angular to services, 
so I'll focused on learn how connecting between Fronted and Backend first. And then continue untill application works nicely.

# H2 Create Basic Server
1. Create standard **package.json** file by *npm init*
2. Install express by *npm install --save express* 
3. Create **config.js**
  1. Add port for using by server.js
4. Create blank **index.html** on *public/app/views/index.html*
5. Create **server.js**
  1. Call basic packages (included express and config)
  2. Create basic ROUTE to FRONTEND
  3. Start the SERVER by listening to port from config

# H2 Create Basic Route to API
1. Create **api.js** on *app/routes/api.js*
  1. Create basic routes to *http://localhost:port_number/api*
2. Modify **server.js**
  1. Add api route to */api*

# H2 Create Basic User Model
1. Create **user.js** on *app/models/user.js*
2. Install mongoose by *npm install --save mongoose*
3. Modify **user.js** 
  1. Add Schema

# H2 Create API to GET Users data (R from CRUD)
1. Add api for get users from database (mongodb)
  1. Add *apiRouter.route('/users')* section for routing to users api
2. Add config parameter to connect to database at *http://localhost:27017/database_name*
3. Add database connection to server.js

# H2 Create Basic Frontend for display Users data
1. Modify **index.html**
  1. Add AngularJS for running AngularJS Script
  2. Add section for angular views
2. Create **all.html** on *public/app/views/pages/users/all.html*

# H2 Create Basic Routing for display all user pages
1. Modify **index.html**
  1. Add Angular Routing
2. Create **app.js** on *public/app/app.js*
3. Create **app.routes.js** on *public/app/app.routes.js*
  1. Add route to all.html

# H2 Create Service for GET Users data
1. Create **userService.js** on *public/app/services/userService.js*
2. Create **userCtrl.js** on *public/app/controllers/userCtrl.js*

# H2 Formating page using Bootstrap
1. Modify **index.html**
  1. Add bootstrap css
2. Create **style.css** on *public/assets/css/style.css*
3. Modify **all.html**

# H2 Create API to POST Users data (C from CRUD)
1. Install bcrypt-nodejs, morgan and body-parser by *npm install bcrypt-nodejs morgan body-parser --save*
2. Modify **server.js**
  1. Add body parser for POST requests
  2. Add morgan for log requests
3. Modify **user.js**
  1. Add function for hash password
4. Modify **api.js**
  1. Add function for POST user data

# H2 Create Frontend for add user data (C from CRUD)
1. Modify **all.html**
  1. Add page header
2. Create **single.html** on *public/app/views/pages/users/all.html*

# H2 Add Routing for display User Create page (C from CRUD)
1. Modify **app.routes.js**
  1. Add route to single.html

# H2 Add Controller for Create new user (C from CRUD)
1. Modify **userCtrl.js**
  1. Add Controller for Create new user
2. Modify **app.routes.js**
  1. Add Controller and ControllerAs
3. Modify **single.html**
  1. Add Angular components

# H2 Add Services for POST User data (C from CRUD)
1. Modify **userService.js**
  1. Add POST user data

# H2 Create Frontend for update user data (U from CRUD)
1. Modify **all.html**
  1. Add Edit button
2. Modify **single.html**
  1. Add Header and button Edit

# H2 Add Routing for display User Edit page (U from CRUD)
1. Modify **app.routes.js**
  1. Add route to single.html

# H2 Add Controller for Edit user (U from CRUD)
1. Modify **userCtrl.js**
  1. Add Controller for Edit user
2. Modify **single.html**
  1. Add Angular components
3. Modify **all.html**
  1. Add Angular components

# H2 Add Service for PUT User data (U from CRUD)
1. Modify **userService.js**
  1. Add PUT user data
  2. Add GET single user data

# H2 Add API to GET and PUT User data (U from CRUD)
1. Modify **api.js**
  1. Add function for GET single user data
  2. Add function for PUT single user data

# H2 Add API to DELETE User data (D from CRUD)
1. Modify **api.js**
  1. Add function for DELETE single user data

# H2 Create Fronted for delete user data (D from CRUD)
1. Modify **all.html**
  1. Add function button for delete single user

# H2 Add Controller for Delete user (D from CRUD)
1. Modify **userCtrl.js**
  1. Add Controller for delete user
2. Modify **all.html**
  1. Add Angular components

# H2 Add Service for DELETE User data
1. Modify **userService.js**
  1. Add DELETE user data

# H2 Create Frontend for Home Page
1. Create **home.html** on *public/app/views/pages/home.html*

# H2 Add Routing for display Home Page
1. Modify **app.routes.js**
  1. Add route to home.html

# H2 Create Frontend for Login Page
1. Create **login.html** on *public/app/views/pages/login.html*

# H2 Add Routing for display Login Page
1. Modify **app.routes.js**
  1. Add route to login.html

# H2 Create Controller for user login
1. Create **mainCtrl.js** on *public/app/controllers/mainCtrl.js*
2. Modify **app.js**
  1. Add mainCtrl.js
3. Modify **index.html**
  1. Add Angular components
4. Modify **app.routes.js**
  1. Add controller and controllerAs to login.html
5. Modify **login.html**
  1. Add Angular components

# H2 Add API to POST for authenticate user
1. Modify **api.js**
  1. Add POST to authenticate name, username and password

# H2 Create Service for basic authenticate user
1. Create **authService.js** on *public/app/services/authService.js*
  1. Add function for log in user

# H2 Add Controller for authenticate user login
1. Modify **mainCtrl.js**
  1. Add Auth service
  2. Add login check
2. Modify **app.js**
  1. Add authService
3. Modify **index.html**
  1. Add authService.js source
4. Modify **login.html**
  1. Add Angular components

# H2 Frontend Navbar for application
1. Modify **index.html**
  1. Add Navbar for application navigation and info

# H2 Add token authentication on API
1. Install jsonwebtoken by *npm install --save jsonwebtoken*
2. Modify **config.js**
  1. Add secret
3. Modify **api.js**
  1. Add function for create token
  2. Return info with token

# H2 Add Controller for token authentication
1. Modify **mainCtrl.js**
  1. Add loggedIn user info
  2. Add $rootScope for get loggedIn on every requests
2. Modify **index.html**
  1. Add Angular components

# H2 Add services for get token and store on localstorage
1. Modify **authService.js**
  1. GET SET token from API
  2. Add store localStorage service 