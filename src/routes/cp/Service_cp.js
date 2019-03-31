Service_api = require('../../Services/API');

 

class cp_auth{
login(req,callback){
    Service_api._login(req,function(error,response){
        return callback(error,response);
    }); 
}

};

class cp_user{ 
    get_user(req,callback){
        Service_api._user(req,function(error,response){
            return callback(error,response);
        });  
    }
};


class cp_points{

    _addPoints(req,points,callback){
        Service_api._addPoints(req,points,function(error,response){
            return callback(error,response);
        });
    }
    _readPoints(req,points,callback){
        Service_api._readPoints(req,points,function(error,response){
            return callback(error,response);
        });
    }
};

var _addPoints = function(req,points,callback){
    Service_api._addPoints(req,points,function(error,response){
        console.log('success');
        return callback(error,response);
    });
}


module.exports.auth = new cp_auth();
module.exports.user = new cp_user();
module.exports.points = new cp_points();
module.exports._addPoints = _addPoints;