const
    subdomain = require('express-subdomain'),
    apiRoute = require('./cp/index')
    homeRoute = require('./main/home');
    session = require('express-session');


function init(server) {

  server.use(session({
    secret: '123456789',
    resave: false,
    saveUninitialized: true
}))
 
  server.use(subdomain('api', apiRoute))

  server.use('/', homeRoute);


  server.get('*', function (req, res, next) {
      console.log('Request was made to: ' + req.originalUrl);
      return next();
  });
}

module.exports = {
  init: init
};
