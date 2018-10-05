console.log("Hello world of Node with JavaScript");
console.log("1st line");
console.log("2nd line");
console.log("3rd line");
//blocking code will execute later.unblock code will not have to wait.
var holdOn = setTimeout(function(){ //it will not for this to be executed.
  console.log("4th line");
},10000);
function sample() {
console.log("5th line");
}
sample();
 //will print this line before callback because it will not wait to execute that.
console.log("6th line");
console.log("7th line");
