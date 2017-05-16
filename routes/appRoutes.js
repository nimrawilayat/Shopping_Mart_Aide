"use strict";
module.exports = module.exports || {};
module.exports.ShoppingMart = module.exports.ShoppingMart || {};
module.exports.ShoppingMart.Routes = module.exports.ShoppingMart.Routes || {};


var AppController = require("../controller/appController").ShoppingMart.Controller;
exports.ShoppingMart.Routes.initRoutes = function(app){

    app.post("/login", AppController.SignIn);
}
/*
module.exports.ShoppingMart.Routes.appRoutes = function(router){
    //router.post("/login", AppController.SignIn);
};*/
