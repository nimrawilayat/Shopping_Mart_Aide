(function() {
    angular.module("shoppingMart")
        .service("loginService", ["$http", "$q","$rootScope",
            function ($http, $q,  $rootScope) {
                var service = this;
                service.authenticateUserDetailsFromServer = function (userDetails) {
                    console.log("userDetails" , userDetails)
                    var deferred = $q.defer();
                    $http.post("/Login", {data: userDetails})
                        .success(function (res) {
                            console.log("res--------" , res)
                            if (res.status) {
                                deferred.resolve(res);
                            } else {
                                deferred.reject(res);
                            }
                        })
                        .error(function (err) {

                            deferred.reject(err);
                        });
                    return deferred.promise;
                };
            }]);



})();