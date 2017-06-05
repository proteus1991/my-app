var app = angular.module("myApp", []);
app.controller("AppCtrl",['$scope','$http',function($scope,$http) {
    // console.log("Hello World from my controller");
var refresh =function(){    


   	$http.get('/contactlist').then(function(response){
    // console.log("The client got your message.")
    
    $scope.contactlist = response.data;
    
	});
};

	refresh();

	// add contact
   	$scope.addcontact = function(){
    	// console.log($scope.contact);

    	$http.post('/contactlist',$scope.contact).then(function(response){
    	//console.log(response.data)
    		refresh();
    	});
	};
	//remove contact
	$scope.remove = function(id){
		console.log(id);
		$http.delete('/contactlist/'+id).then(function(response){
			refresh();
		});
	};


    
}]);