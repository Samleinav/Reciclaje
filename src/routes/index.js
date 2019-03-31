const
    subdomain = require('express-subdomain'),
    cpRoute = require('./cp/index')
    homeRoute = require('./main/home');
    shopRoute = require('./shop/index');
    session = require('express-session');


function init(server) {

  server.use(session({
    secret: '123456789',
    resave: false,
    saveUninitialized: true
}))
 //subdomain routes
  server.use(subdomain('api', cpRoute));
  server.use(subdomain('shop',shopRoute));

  //main routes
  server.use('/', homeRoute);

}

module.exports = {
  init: init
};
