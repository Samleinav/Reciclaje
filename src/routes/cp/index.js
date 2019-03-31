var express = require('express')
    router = express.Router();
    _user = require('./Service_cp').user;
    _auth = require('./Service_cp').auth;
    _points = require('./Service_cp').points;
    _addPoints = require('./Service_cp')._addPoints;

router.get('*',function(req,res,next){
      if(req.session.user){ 
        res.locals.user = req.session.user 
        return next()};

      _user.get_user(req,function(error,response){
        res.locals.user = req.session.user  = response;  
        return next();
      });
    });

 router.get('/', function(req, res, next) {    
        res.render('indexcp', { title: 'Dashboard'});     
   });

  router.get('/login',function(req,res,next){
    req.session.destroy();
    res.render('login', { layout : false });    
  });
 
  router.post('/login',function(req,res,next){
    _auth.login(req,function(error,response){
      if(error){console.log('no funciona')
        res.render('login', { layout : false });
    }
  
    switch(response){
      case true :  res.redirect("/");

      break;
      case false: res.render('login', { layout : false });
    }
    })
  });

  router.post('/cp/points/add',function(req,res,next){
    _addPoints(req,10,function(error,response){
      if(error){ res.send("error")}
      console.log(req.body)
      res.send("+10 puntos");
    })

  });
  module.exports = router;
