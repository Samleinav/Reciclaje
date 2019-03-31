var Request = require("sync-request");
var   success = true;
var failed = false;
var method={
        POST:'POST',
        GET: 'GET',
        PUT: 'PUT'
    }
    var  userdata = {
    Points : 400,
    VIP : 7,
    TCU : 450,
    Referrals : 4,
    Products_change: 21,
    Friends: 11,
    Activity: 5
    }

class service_api {
    _all_users(req,callback){ 
        var response = Request(method.GET,"https://recycling-uaca.herokuapp.com/api/v1/users");
        return callback(null,JSON.parse(response.getBody('utf8')));
    };

    _user(req,callback){
        if (typeof req !== 'object') {
            let error = new Error("No Session found");
            return callback(error,null);
        }
        return callback(null,userdata);
    };

    _login (req,callback){
        if (typeof req !== 'object') {
            let error = new Error("No Session found");
            return callback(error,null);
        }
        console.log(req.body);
        if(req.body){
            if(req.body.password == '123' && req.body.email == 'test@test.com')
            return callback(null,success);
        }
        return callback(null,failed);
    }

    _forget (req,callback){
        if (typeof req !== 'object') {
            let error = new Error("No Session found");
            return callback(error,null);
        }
    }

    _register (req,callback){
        if (typeof req !== 'object') {
            let error = new Error("No Session found");
            return callback(error,null);
        }
        return callback(null,success);
    }

    _addPoints(req,points,callback){

        if (typeof req.session !== 'object') {
            let error = new Error("No Session found");
            return callback(error,null);
        }
        req.session.user.Points += 10;
        console.log(req.session.user);
        return callback(null,success);
    }

    _readPoints (req,callback){
        if (typeof req.session !== 'object') {
            let error = new Error("No Session found");
            return callback(error,null);
        }  
        return callback(null,req.session.user.Points);
    }

    _deletePoints (req,points,callback){
        if (typeof req !== 'object') {
            let error = new Error("No Session found");
            return callback(error,null);
        }
        req.session.user.Points =- points;
        return callback(null,success);
    }
    
}

module.exports= new service_api();