var Request = require("request");

const API = "https://recycling-uaca.herokuapp.com/api/v1/";

module.exports.GetAllUsers = function(){ 

    return( Request.get("https://recycling-uaca.herokuapp.com/api/v1/users",function(error, response, body){
        if(error) {
            return console.dir(error);
        }
        console.log('headers: ', response.headers)
        console.log('statusCode: ', )
        return(JSON.stringify(body));
    }) );
};