var express = require('express')
    router = express.Router();
    Service = require('./Service_home');
    _auth = require('./Service_home').auth;
    _points = require('./Service_home').points;
    _user = require('./Service_home').user;
    


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
    //  _user._all_users(req,function(error,response){
    //   res.locals.table = response;
    //  });
    res.render('index', { title: 'Dashboard'});
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
        case true : res.redirect("/");
        break;
        case false: res.render('login', { layout : false });
      }
    })
  });
  module.exports = router;