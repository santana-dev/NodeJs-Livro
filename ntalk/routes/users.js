module.exports = function(app) {
 
  var users = app.controllers.users;
  
  app.get('/',
    users.index
  );
 
};