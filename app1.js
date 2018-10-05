var user = {
  name:"Kani",
  age:20,
}
var magic = (magician,trick)=>{
  return `Magician : ${magician.name} Age : ${magician.age} Trick : ${trick}`
}
var comedy = (comedian,comedy)=>{
  return `Comedian : ${comedian.name} Age : ${comedian.age} Trick : ${comedy}`
}
//for single fuction pass
//module.exports = magic;
address= {
  pin:244001,
  street:"MU",
}

//for passing multiple functions we have to create a object
module.exports= {
  magic:magic,
  comedy:comedy,
  address:address

}
//or we can just put module.exports.functionname.then we have not to give extra object for module.exports. 
// module.exports.magic = (magician,trick)=>{
//   return `Magician : ${magician.name} Age : ${magician.age} Trick : ${trick}`
// }
// module.exports.comedy = (comedian,comedy)=>{
//   return `Comedian : ${comedian.name} Age : ${comedian.age} Trick : ${comedy}`
// }
