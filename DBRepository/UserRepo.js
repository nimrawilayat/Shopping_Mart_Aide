module.exports = module.exports || {};
module.exports.ShoppingMart = module.exports.ShoppingMart || {};
module.exports.ShoppingMart.Repo = module.exports.ShoppingMart.Repo || {};

//var q           = require("q");
//var UserModel   = require("../../schemas/userManagement/userSchema").Vitalia.Model.getVitaliaUserModel();
var UserModel   = require("../Schemas/userSchema").Model.Users.UsersModel;


module.exports.ShoppingMart.Repo.SaveNewUser = function(data, addingInitialAdminUser){
    var deferred = q.defer();
    var newModel = new UserModel(data);


    newModel.save(function(err, doc){
        if(err){
            console.log("error in saving at user details");
            console.log(err);
            deferred.reject({status: false, message: 'Failed to save', obj :err});
        }
        else{
            doc.Password = password;
            deferred.resolve({status: true, message: "Saved successfully", obj : doc});
        }
    });
    return deferred.promise;
};




module.exports.ShoppingMart.Repo.FindUsersFromDB = function(isSingle, query, selectFields, sortParams, limit, skip){
    var deferred = q.defer();
    if(isSingle){
        UserModel.findOne(query)
            .select(selectFields || "")
            .exec(function(err , doc){
                if(err){
                    console.log("err");
                    console.log(err);
                    deferred.reject({status: false, message:"Error in finding previous saved docs", obj : err});
                }
                else{
                    deferred.resolve({status: true, message:"Found Successfully", obj : doc})
                }
            });
    }
    else{
        UserModel.find(query)
            .sort(sortParams || '')
            .select(selectFields)
            .limit(limit ? parseInt(limit) : 0)
            .skip(skip ? parseInt(skip) : 0)
            .exec(function(err , docs){
                if(err){
                    console.log("err");
                    console.log(err);
                    deferred.reject({status: false, message:"Error in finding previous saved docs", obj : null, err : err});
                }
                else{
                    deferred.resolve({status: true, message:"Found Successfully", obj : docs})
                }
            });
    }
    return deferred.promise;
};




module.exports.ShoppingMart.Repo.UpdateUsersInDB = function(queryParams, updateParams, multi){
    var deferred = q.defer();
    UserModel.update(queryParams, updateParams, {multi : multi || false}, function(err, effectedDocsCount){
        if(err){
            console.log("Error in Updating service in DB");
            console.log(err);
            deferred.reject({status:false , message : "DB Error, Failed to Update data in DB", errObj : err});
        } else {
            deferred.resolve({status: true, counts : effectedDocsCount, message : "Update Successfully"});
        }
    });
    return deferred.promise;
};
function getPassword(){
    return Math.random().toString(36).slice(-8);
}

