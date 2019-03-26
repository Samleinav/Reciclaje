var express = require('express')
var router = express.Router();

var json = [{
  "color": "red",
  "value": "#f00",
  "color1": "red",
  "value2": "#f00"
},
{
  "color": "red",
  "value": "#f00",
  "color1": null,
  "value2": "#f002"
},{
  "color": "red",
  "value": "#f00"
}];

var date = new Date();
var current_hour = date.getHours();

Ujson = {
  Points : 400,
  VIP : 7,
  TCU : 450,
  Referrals : 4,
  Products_change: 21,
  Friends: 11,
  Activity: current_hour
}




router.use('*', function(req, res, next){
  if(!req.session){
    res.redirect('/login');
    next();
  }else{
    console.log(req.sessionID);
    next();
  }
})

router.get('/', function(req, res, next) {  
  res.locals.table = json;
  
    res.render('index', { title: 'hi', user : Ujson });
  })

  module.exports = router;