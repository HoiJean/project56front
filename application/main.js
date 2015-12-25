var app = angular.module('citygis', ['ngRoute']);

app.controller('MainCtrl', function($scope, connectionService, eventService, monitoringService) {
	$scope.message = "Connecties uit angular";

	connectionService.getConnections().then(function(response) {
		// Connections
		$scope.connectionsCount = response.data.length;
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
		.when('/', {
			controller: 'RapportController',
			templateUrl: './templates/rapport.html'
		})
		.otherwise({ redirectTo: '/'});
}]);