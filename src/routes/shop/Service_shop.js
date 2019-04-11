const _ = require('lodash');
    Service_api = require('../../Services/API').api;

    shopdata = [{
        id:1,
        name:"Tienda 1"
    }];
    var products =[{
        id : 1,
        name: "Jabón",
        stock:10,
        maxchange : 1,
        cost: 50
    },
    {
        id : 2,
        name: "Bolsa Tela",
        stock:10,
        maxchange : 1,
        cost: 120
    },
    {
        id : 3,
        name: "Cupón Descuento 10%",
        stock:10,
        maxchange : 1,
        cost: 250
    }]

class Shop_Service extends Service_api{

    _readPoints(id,callback){
        if(id){
            let user = _.find(this.userdata, x => x.id === id);
            return callback(null,user.Points);
        }
        let error = new Error("No Session found");
            return callback(error,null);
    }
    _deletePoints(id,points,callback){
        if(id){
            let user = _.find(this.userdata, x => x.id === id);
            user.Points -= points;
            return callback(null,user.Points);
        }
        let error = new Error("No Session found");
            return callback(error,null);
    }
    _addPoints(id,callback){
        
    }
    _products(req,callback){
        if (typeof req.session.shop !== 'object') {
            let shop = shopdata[0];
            req.session.shop = shop;
            req.session.shop.products = products;
        }
        if(req.session.shop){
            let products = req.session.shop.products;
            return callback(null,products);
        }
        let error = new Error("No Session found");
            return callback(error,null);
    }

    _sellproduct(req,callback){
        if (typeof req !== 'object') {
            let error = new Error("No Session found");
            return callback(error,null);
        }
        let points = 0;
        if(req.session.shop){
            for(x = 0; x < req.session.shop.products.length;x++){
                for(i=0; i< req.body.length;i++){
                if(req.session.shop.products[x].id == req.body[i].id){
                    req.session.shop.products[x].stock -= req.body[i].count;
                    }  
                }
            }
            return callback(null,true);
        }
    }
};

module.exports= new Shop_Service();
