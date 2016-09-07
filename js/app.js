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
        
        // HOME STATES AND NESTED VIEWS 
        .state('home', {
            url: '/home',
            templateUrl: 'views/partial-home.html'
        })

        //nested list
        .state('home.list',{
          url: '/list',
            templateUrl: 'views/partial-apples.html',
            controller: function($scope) {
            $scope.apples = ['Granny Smith', 'Red Delicious', 'Gala', 'Honeycrisp'];
            }
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: 'views/partial-about.html'     
        })
        
});