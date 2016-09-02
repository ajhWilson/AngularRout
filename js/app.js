var app = angular.module('mainApp', []); 

app.controller ('userController', function($scope){
	$scope.users = [
	"User One",
	"User Two",
	"User Three"
	];
});