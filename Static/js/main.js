/**
 * Created by MTA on 7/27/2016.
 */

"use strict";
(function(){
 angular.module("ShoppingMart",['ngMaterial'])
        .config(["$stateProvider", "$urlRouterProvider",
            function($stateProvider, $urlRouterProvider){
/*

                $stateProvider
                    .state("home", {
                        url : "/"/!*,
                         template : "HOME"*!/
                    })
                    .state("login", {
                        url : "/login",
                        templateUrl : "login.html",
                        controller  : "loginController as vm"
                    })
*/

                $urlRouterProvider.otherwise("/");

            }]);




})();