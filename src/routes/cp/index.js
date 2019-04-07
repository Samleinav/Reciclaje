var express = require('express')
    router = express.Router();
    serviceCP = require('./Service_cp');

  router.get('*',function(req,res,next){
      if(req.session.user){ 
        res.locals.user = req.session.user 
        res.locals.hostname = req.subdomains;
        return next()
      };
        serviceCP._user(req,function(error,response){
        res.locals.user = req.session.user  = response; 
        res.locals.hostname = req.subdomains;
        return next();
        //return res.redirect('/login');
      });
    });

 router.get('/', function(req, res, next) { 
  serviceCP._recyclingPoints(function(error,response){
    res.render('index1', { title: 'recycling point', Rpoints : response});     
   })   
        
   });

  router.get('/login',function(req,res,next){
    res.render('login', { layout : false });    
  });
 
  router.post('/login',function(req,res,next){
    serviceCP._login(req,function(error,response){
      if(error || response == false){
        res.render('login', { layout : false , msg : "Fail Login"});
      }
      req.session.user = response;
      res.redirect('/');
    })
  });

  router.post('/cp/points/add',function(req,res,next){
    serviceCP._addPoints(req,10,function(error,response){
      if(error){ res.send("error")}
      console.log(req.body)
      res.send("+10 puntos");
    })

  });
  module.exports = router;
