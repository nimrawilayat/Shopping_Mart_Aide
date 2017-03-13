(function(){
   var app=angular.module("ShoppingMart",['ngMaterial'])
       .controller("loginController", ["$rootScope", "$state", "$http",
            function($rootScope, $state, $http){
                var vm = this;

            }
        ]).config(function($mdThemingProvider) {

           // Configure a dark theme with primary foreground yellow

           $mdThemingProvider.theme('docs-dark', 'default')
               .primaryPalette('green')
               .dark();
       });
})();