// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
var express = require('express')
var app = express();
var jsonData = {count: 12, message: 'hey'}


app.get('/todos', function(req, res){
  res.send(jsonData);
})

app.post('/todos', function(req, res){

})



app.listen(3000, function(){
  console.log('listening on port 3000')
})
