(function(){
    angular.module("shoppingMart")
        .controller("loginController",
            function($rootScope, loginService) {
                var vm = this;
               /* vm.doLogin = function(){
                    if(vm.user.email  && vm.user.password){
                        console.log("vmmm" , vm)
                        loginService.authenticateUserDetailsFromServer(vm.user)
                            .then(function(data){
                                $rootScope.userRootLoginID = data.user.LoginID;

                                $scope.$emit("userLoggedIn", {userRootLoginID : $rootScope.userRootLoginID});
                                $state.go("home");
                            });
                    } else {
                        alert("Please enter user name and password to continue.");
                    }*/
               /* };*/
            }
        ).config(function($mdThemingProvider) {

        // Configure a dark theme with primary foreground yellow

        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();
    });

})()
