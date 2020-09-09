var express = require('express');
var app = express();
var http = require('http').Server(app);
require('dotenv').config();
app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap/dist/'));
express.static('public')
console.log(__dirname) ;
console.log("added for checking the commit");
console.log("added for checking the commit");
console.log("added for checking the commit");
app.get('/', function(req, res){
 res.sendFile(__dirname +'/AppPages/MyPage.html');
 

});
app.post('/', function(req, res) {
    var item = req.body.userSearchInput;
    console.log(item);
});

http.listen(process.env.port, function(){
  console.log('listening on *:3000');
});