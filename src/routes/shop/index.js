var express = require('express')
    router = express.Router();
    ServiceShop = require('./Service_shop');

    router.get('*',function(req,res,next){
      if(req.session.user){ 
        res.locals.user = req.session.user 
        res.locals.hostname = req.subdomains;
        return next()};

        ServiceShop._user(req,function(error,response){
        res.locals.user = req.session.user  = response; 
        res.locals.hostname = req.subdomains;
        return next();
      });
    });

  router.get('/', function(req, res, next) {  
    res.render('index2', { title: 'Shop'});
  });

  router.get('/login',function(req,res,next){
    res.render('login', { layout : false });    
  });
 
  router.post('/login',function(req,res,next){
    ServiceShop._login(req,function(error,response){
      if(error || response == false){
        res.render('login', { layout : false , msg : "Fail Login"});
      }
      req.session.user = response;
      res.redirect('/');
    })
  });

  router.post('/shop/points/read',function(id,res,next){
    ServiceShop._readPoints(id,function(error,response){
      if(error){ res.json("No se pudo agregar")}
      res.json("+10 puntos");
    })
  });
  router.post('/shop/points/delete',function(req,res,next){
    ServiceShop._deletePoints(req,function(error,response){
      if(error){ res.json("No se pudo agregar")}
      res.json("+10 puntos");
    })
  });
  router.post('/shop/purchase/confirmation',function(req,res,next){
    ServiceShop._sellproduct(req,function(error,response){
        if(error){res.json(null)}
        res.json(response);
    });
  });

  router.post('/shop/products',function(req,res,next){
    ServiceShop._products(req,function(error,response){
      if(error){ return res.json(null)}
      console.log(response);
      res.send(JSON.stringify(response));
    })
  });
  module.exports = router;
