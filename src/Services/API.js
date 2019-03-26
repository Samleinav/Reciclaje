var Request = require("request");

var api = {};

api.Get_AllUsers = function(){ 

    return( Request.get("https://recycling-uaca.herokuapp.com/api/v1/users",function(error, response, body){
        if(error) {
            return console.dir(error);
        }
        return(JSON.stringify(body));
    }) );
};

api.Get_user= function(){

}

api.Main_login = function(data){
return(data);
}

api.Main_forget = function(){

}

api.Main_register = function(){

}

api.CP_addPoints = function(){

}

api.CP_readPoints = function(){

}

api.CP_deletePoints = function(){

}

module.exports.API = api;