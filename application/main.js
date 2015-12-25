var app = angular.module('citygis', ['ngRoute']);

app.controller('MainCtrl', function($scope) {
	$scope.message = "Connecties uit angular";
});


app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'MainCtrl',
			templateUrl: './templates/test.html'
		})
		.when('/test', {
			controller: 'TestController',
			templateUrl: './templates/test.html'
		})
		.otherwise({ redirectTo: '/'});
}]);