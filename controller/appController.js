"user strict";
module.exports = module.exports || {};
module.exports.ShoppingMart = module.exports.ShoppingMart || {};
module.exports.ShoppingMart.Controller = module.exports.ShoppingMart.Controller || {};
var userRepo = require("../DBRepository/UserRepo").ShoppingMart.Repo;


module.exports.ShoppingMart.Controller.SignIn = function(req, res){
console.log("req.body" , req.body)
    res.send({status : true})
    /*userRepo.FindUsersFromDB(true, {email : req.body.data.email})
        .then(function(userDetails){
            //console.log("userDetails : ", userDetails);
            var user = userDetails.obj;
            if(!user || !user._id){
                return res.send({status : false, message : "No user found with supplied login ID."});
            }
        }, function(err){
            res.send(err);
        });*/
};

