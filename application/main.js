var app = angular.module('citygis', ['ngRoute']);


app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'DashboardController',
			templateUrl: './templates/main.html'
		})
		.when('/rapport', {
			controller: 'RapportController',
			templateUrl: './templates/rapport.html'
		})
		.otherwise({ redirectTo: '/'});
}]);