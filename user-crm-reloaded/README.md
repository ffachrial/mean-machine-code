# H2 Introduction
First weeks of the October 2016 I followed the course of the ME_N Stack (not included the 'A' for Angular).

I'm tried to use different approach. Last time I got failed when try connecting from Angular to services, 
so I'll focused on how connecting between Fronted and Backend first.

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
3. Add Schema to user.js

# H2 Create API to GET Users data
1. Add api for get users from database (mongodb)
2. Add config parameter to connect to database
3. Add database connection to server.js

