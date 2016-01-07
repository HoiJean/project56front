var app = angular.module('citygis', ['ngRoute', 'angularUtils.directives.dirPagination', 'uiGmapgoogle-maps']);

app.config(['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
	GoogleMapApiProviders.configure({
		//    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization',
        china: true
	});
}]);

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
<<<<<<< HEAD
		.when('/unit/:id', {
			controller: 'UnitController',
			templateUrl: './templates/unit/details.html'
=======
		.when('/maps', {
			controller: 'MapsController',
			templateUrl: './templates/maps.html'
>>>>>>> develop
		})
		.otherwise({ redirectTo: '/'});
}]);


