const http = require('http');
const host = '127.0.0.1';
const port = 3000;
var server = http.createServer(function(req,res){
  //set http status code along with a media type
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end("Hello Node Server LOcal"); //it will show on localhost:3000
  console.log("Create Server");
});
server.listen(port,host,function() {
    console.log(`Server is running on http://${host}:${port}`);
});
