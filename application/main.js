var app = angular.module('citygis', ['ngRoute']);

app.controller('MainCtrl', function($scope, connectionService) {
	$scope.message = "Connecties uit angular";

	connectionService.getConnections().then(function(response) {
		// Connections
		$scope.connectionsCount = response.data.length;
	});

});


app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'MainCtrl',
			templateUrl: './templates/main.html'
		})
		.when('/test', {
			controller: 'TestController',
			templateUrl: './templates/test.html'
		})
		.otherwise({ redirectTo: '/'});
}]);