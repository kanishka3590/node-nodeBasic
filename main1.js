var show = require('./app1.js');
var user = require('./magician.js');

// console.log(magic);
// console.log(magician);

// var mag = magic(magician,"MOP");
// console.log(mag);

console.log(show);
var res = show.comedy(user,"Black comedy");
console.log(res);
user.age =40;
var res = show.magic(user,"Black Magic");
console.log(res);
