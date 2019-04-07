var express = require('express')
    router = express.Router();
    ServiceHome = require('./Service_home');
    
  router.get('*',function(req,res,next){
      if(req.session.user){ 
        res.locals.user = req.session.user 
        res.locals.hostname = req.subdomains;
        return next()};

        ServiceHome._user(req,function(error,response){
        res.locals.user = req.session.user  = response; 
        res.locals.hostname = req.subdomains;
        return next();
         //return res.redirect('/login');
      });
    });

  router.get('/', function(req, res, next) {  
    res.render('index', { title: 'Dashboard'});
  });

  router.get('/login',function(req,res,next){
    res.render('login', { layout : false });    
  });
 
  router.post('/login',function(req,res,next){
    ServiceHome._login(req,function(error,response){
      if(error || response == false){
        res.render('login', { layout : false , msg : "Fail Login"});
      }
      req.session.user = response;
      res.redirect('/');
    })
  });

  module.exports = router;