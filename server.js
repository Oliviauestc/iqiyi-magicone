var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
/*app.get('/indexbk.html', function (req, res) {
   res.sendFile( __dirname + "/" + "indexbk.html" );
})*/
app.get('/top.html', function (req, res) {
   res.sendFile( __dirname + "/" + "top.html" );
})
app.get('/so.html', function (req, res) {
   res.sendFile( __dirname + "/" + "so.html" );
})
app.get('/special.html', function (req, res) {
   res.sendFile( __dirname + "/" + "special.html" );
})
app.get('/mvSheet.html', function (req, res) {
   res.sendFile( __dirname + "/" + "mvSheet.html" );
})
app.get('/opinionbox.html', function (req, res) {
   res.sendFile( __dirname + "/" + "opinionbox.html" );
})
app.get('/personalCenter.html', function (req, res) {
   res.sendFile( __dirname + "/" + "personalCenter.html" );
})
app.get('/speechRecognition.html', function (req, res) {
   res.sendFile( __dirname + "/" + "speechRecognition.html" );
})



var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
