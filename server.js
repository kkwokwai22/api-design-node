// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
var express = require('express')
var fs = require('fs')
var app = express();
var jsonData = {count: 12, message: 'hey'}

var lion = {
  name: 'samba',
  id: 1,
  age: 12,
  pride: 'im cool',
  gender: 'male'
}


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html', function(err, data){
    if(err) {
      return console.error(err);
    }
  })
})

app.get('/data', function(req, res){
  res.send(jsonData);
})

app.post('/todos', function(req, res){

})



app.listen(3000, function(){
  console.log('listening on port 3000')
})
