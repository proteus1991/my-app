var app = angular.module("myApp", []);
app.controller("AppCtrl",['$scope','$http',function($scope,$http) {
    // console.log("Hello World from my controller");
    $http.get('/contactlist').then(function(response){
    console.log("I got your message.")
    $scope.contactlist = response.data;
    });
    
}]);