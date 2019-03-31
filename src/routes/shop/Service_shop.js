Service_api = require('../../Services/API');



class shop_auth{
login(req,callback){
    Service_api._login(req,function(error,response){
        return callback(error,response);
    });  
}

};

class shop_user{ 
    get_user(req,callback){
        //get function on api
        Service_api._user(req,function(error,response){
            return callback(error,response);
        });  
    }
};


class shop_points{

    _deletePoints(req,points,callback){
        Service_api._deletePoints(req,points,function(error,response){
            return callback(error,response);
        });
    }
    _readPoints(req,points,callback){
        Service_api._readPoints(req,points,function(error,response){
            return callback(error,response);
        });
    }
};

module.exports.auth = new shop_auth();
module.exports.user = new shop_user();
module.exports.points = new shop_points();
