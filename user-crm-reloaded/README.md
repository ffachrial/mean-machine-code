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
