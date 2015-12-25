var app = angular.module('citygis', ['ngRoute']);

app.controller('MainCtrl', function($scope, connectionService, eventService, monitoringService) {
	$scope.message = "Connecties uit angular";

	connectionService.getConnections().then(function(response) {
		// Connections
		$scope.connectionsCount = response.data.length;
		$scope.data = [];
		$scope.connections = response.data;

		var chunk = 7;
		var output = [];

		for(var i = 0; i < 10; i++) {
			$scope.data.push(["Year", i*10]);
		}

		console.log(output);

	});

	eventService.getEvents().then(function(response) {
		$scope.eventsCount = response.data.length;
	});

	monitoringService.getMonitoring().then(function(response) {
		$scope.monitoringsCount = response.data.length;
	});

});

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'MainCtrl',
			templateUrl: './templates/main.html'
		})
		.when('/rapport', {
			controller: 'RapportController',
			templateUrl: './templates/rapport.html'
		})
		.otherwise({ redirectTo: '/'});
}]);