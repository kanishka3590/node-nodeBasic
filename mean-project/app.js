var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname,'mean-project')));
app.get('/',function (req,res) {
  res
  .status(200)
  .sendFile(path.join(__dirname,'/Login Form/index.html'))
});
app.get('/home',function (req,res) {
  console.log('Home Page Data here...');
  res
  .status(200)
  .sendFile(path.join(__dirname,'/signup.html'))
});
app.post('/employee',function (req,res) {
  console.log('Employee Data here...');
  res
  .status(200)
  .json({EmployeeId:12345});
});
app.get('/json/:name/:age',function (req,res) {
  console.log(req.url);
  console.log(req.method);
  console.log(req.query);
  console.log(req.params);
  // user = {
  //   name:"Suresh Raina",
  //   age:29,
  //   description:"Short and handsome guy",
  //   jobrole:"indian crickter"
  // }
  res
  .status(200)
  .json({name:req.params.name,age:req.params.age});
});
app.get('/employee',function (req,res) {
  console.log(__dirname);
  employee = {
    emp_Id : "A1234",
    emp_name : "Sam",
    sal : 30000,
    post : "SE"
  }
  res
  .status(200)
  .json({Employee_id : req.params.emp_Id,Employee_name : req.params.emp_name,Employee_Salary : req.params.sal, Employee_post : req.params.post})
});
app.get('/file',function (req,res) {
  console.log(__dirname);
  res
  .status(200)
  .sendFile(path.join(__dirname,'server.js'))
});
app.get('/data',function (req,res) {
  console.log('This is Data Page...');
  res.status(200).send('This is Data Page...')
});
app.set('port','3000');
app.listen(app.get('port'),function () {
  console.log('Server is Running by using express');
});
