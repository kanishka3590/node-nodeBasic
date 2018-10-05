var d = require('./modules/demo');

//here we are not giving file name.so first it will search for modules.js file,if not there
//it will search for modules directory then will search for index.js file by default. 
var index = require('./modules')
console.log('...........');
console.log(index);
console.log('.........');
console.log(d.demo);
console.log(d.a);
