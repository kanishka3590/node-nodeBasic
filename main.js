//to import module
//require('./app.js');
var userObj = require('./app1.js');
console.log(userObj);
//we can access from different module.
userObj.name = "ABC";
userObj.sal = 200;
console.log(userObj);
