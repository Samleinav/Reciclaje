var points = {}
    api = require('../../API').API;

points.add = function(data){
    return(api.CP_addPoints(data))
}

points.delete = function(data){
    return(api.CP_deleteoints(data))
}

points.read = function(data){
    return(api.CP_readPoints(data))
}

exports.methods = points;