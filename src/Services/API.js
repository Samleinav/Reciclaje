const Request = require("sync-request");
const _ = require('lodash');
_userprofile= function(data){
    return {
            id: data.id,
            email:data.email,
            password:data.password_digest,
            Points :data.points,
            VIP : 7,
            TCU : 450,
            Referrals : 4,
            Products_change: 21,
            Friends: 11,
            Activity: 5,
            name : data.firstname,
            lastname: data.lastname
    };
};

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
            Activity: 5,
            name : ""
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
    };

    _login (req,callback){
        if (typeof req !== 'object') {
            let error = new Error("No Session found");
            return callback(error,null);
        }
        
        if(req.body){
            //let user = _.find(this.userdata, x => x.email === req.body.email);
            try{
               let res = JSON.parse(Request('POST','https://recycling-uaca.herokuapp.com/api/v1/authenticate',{
                headers: {
                    'Content-Type': 'application/json',
                  },
                json : req.body
              }).getBody('utf8')); 
              if(res.user){ 
                let user = _userprofile(res.user);
                return callback(null,user);  
            }
            }catch(error){
                console.log(error);
               return callback(true,null); 
            }
            

            
        }
        
        
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