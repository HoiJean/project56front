var app = angular.module('citygis', ['ngRoute', 'angularUtils.directives.dirPagination']);

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
		.when('/unit/:id', {
			controller: 'UnitController',
			templateUrl: './templates/unit/details.html'
		})
		.otherwise({ redirectTo: '/'});
}]);