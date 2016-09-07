var app = angular.module('mainApp', ['ui.router']); 

app.controller ('userController', function($scope){
	$scope.users = [
	"User One",
	"User Two",
	"User Three"
	];
});

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'views/partial-home.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: 'views/partial-about.html'     
        })
        
});