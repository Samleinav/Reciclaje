var Request = require("sync-request");
    Service_api = require('../../Services/API').api;


 

class cp_service extends Service_api {
    _recyclingPoints(callback){
        var response = this.CP; //Request("GET","https://recycling-uaca.herokuapp.com/api/v1/collection_points");
        return callback(null,response); //JSON.parse(response.getBody('utf8')));
    }

    _addPoints(req,points,callback){
        if (typeof req.session !== 'object') {
            let error = new Error("No Session found");
            return callback(error,null);
        }
        req.session.user.Points += 10;
        console.log(req.session.user);
        return callback(null,this.success);
    }

};

module.exports= new cp_service();