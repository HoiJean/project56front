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
			var arr = $scope.connections[i];
			var datetime = arr.Datetime;
			var value = arr.Value;
			output.push([datetime,value]);
			var d = new Date(datetime);
			console.log(d);

			// $scope.data.push(["Year", i*10]);
		}

		console.log(output.splice(0, 3));

		$scope.data = output;

		// console.log(output);

		// console.log($scope.connections.slice(0, 3));

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