module.exports.run = function(){
  var express = require('express');
  var app = express();
  app.use(express.static('public'))
  app.get('/', function(req, res){
    res.status(200).send("OK")
  })
  var listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
  });
  const http = require('http')
  setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
  }, 250000); 
  //Glitch.com puts your app to sleep after 5min of inactivity
  //to get around this we manually ping the app
}