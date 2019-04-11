var Request = require("sync-request");
    Service_api = require('../../Services/API').api;


 

class cp_service extends Service_api {
    _recyclingPoints(callback){
        var response = JSON.parse(Request("GET","https://recycling-uaca.herokuapp.com/api/v1/collection_points").getBody('utf8'));
        return callback(null,response); //response.;
    }

    _addPoints(req,points,callback){
        if (typeof req.session !== 'object') {
            let error = new Error("No Session found");
            return callback(error,null);
        }
        req.session.user.Points += 10;
        Request("GET","https://recycling-uaca.herokuapp.com/api/v1/collection_points/assign_points?user_id="+req.session.user.id)
        console.log(req.session.user);
        return callback(null,this.success);
    }

};

module.exports= new cp_service();