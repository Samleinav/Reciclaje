Service_api = require('../../Services/API');


class auth{
    login(req,callback){
        Service_api._login(req,function(error,response){
            console.log('success');
            return callback(error,response);
        });  
    }
};

class user{ 
    get_user(req,callback){
        Service_api._user(req,function(error,response){
            console.log('success');
            return callback(error,response);
        });  
    }
    _all_users(req,callback){
        Service_api._all_users(req,function(error,response){
            console.log('success');
            return callback(error,response);
        });  
    }
};
class points{

    _addPoints(req,points,callback){
        Service_api._addPoints(req,points,function(error,response){
            console.log('success');
            return callback(error,response);
        });
    }
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

module.exports.auth = new auth();
module.exports.user = new user();
module.exports.points = new points();
