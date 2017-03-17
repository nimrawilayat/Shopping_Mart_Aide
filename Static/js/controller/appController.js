(function(){
    angular.module("shoppingMart")
        .controller("loginController", ["$rootScope", "$http",
            function($rootScope,  $http){
                var vm = this;

            }
        ]).config(function($mdThemingProvider) {

        // Configure a dark theme with primary foreground yellow

        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();
    });

})()
