const Request = require("sync-request");
const _ = require('lodash');

class service_api {
    constructor() {
        this.success = true;
        this.failed = false;
        this.method={
            POST:'POST',
            GET: 'GET',
            PUT: 'PUT'
            };
        this.userdata = [{
            id: 1,
            email:"test@test.com",
            password:"123",
            Points : 400,
            VIP : 7,
            TCU : 450,
            Referrals : 4,
            Products_change: 21,
            Friends: 11,
            Activity: 5
        },{
            id: 2,
            email:"test1@test.com",
            password:"123",
            Points : 0,
            VIP : 1,
            TCU : 0,
            Referrals : 1,
            Products_change: 5,
            Friends: 1,
            Activity: 2
            }];
        this.CP =[{
            id : "1",
            name: "punto acopio 1"
        },
        {
            id : "2",
            name: "punto acopio 2"
        }]
    };


    _user(req,callback){
        if (typeof req !== 'object') {
            let error = new Error("No Session found");
            return callback(error,null);
        }
        if(req.session.user){
            let user = _.find(this.userdata, x => x.id === req.session.user.id);
            return callback(null,user);
        }
        console.log('no session');
        return callback(null,this.userdata[1]);
    };

    _login (req,callback){
        if (typeof req !== 'object') {
            let error = new Error("No Session found");
            return callback(error,null);
        }
        
        if(req.body){
            let user = _.find(this.userdata, x => x.email === req.body.email);
            if(req.body.password === user.password){ 
                console.log('auth success;');
                return callback(null,user); 
            };
        }
        console.log('auth fail;');
        return callback(null,this.failed);
    };

    _forget (req,callback){
        if (typeof req !== 'object') {
            let error = new Error("No Session found");
            return callback(error,null);
        }
    };

    _register (req,callback){
        if (typeof req !== 'object') {
            let error = new Error("No Session found");
            return callback(error,null);
        }
        return callback(null,this.success);
    };

    
   
}
module.exports.api = service_api