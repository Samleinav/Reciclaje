var authentication = {}
    api = require('../../API').API;

authentication.login = function(data){
    return(api.Main_login(data));
}

module.exports.auth = authentication;