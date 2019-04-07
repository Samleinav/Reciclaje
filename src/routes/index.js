const
    subdomain = require('express-subdomain'),
    cpRoute = require('./cp/index')
    homeRoute = require('./main/home');
    shopRoute = require('./shop/index');
    session = require('express-session');
    MemoryStore = require('memorystore')(session)
 
function init(server) {
  //session
  server.use(session({
    store: new MemoryStore(),
    secret: '123456789',
    resave: true,
    saveUninitialized: true
  }));
  
 //subdomain routes
  server.use(subdomain('api', cpRoute));
  server.use(subdomain('shop',shopRoute));

  //main routes
  server.use('/', homeRoute);

  
}

module.exports = {
  init: init
};
