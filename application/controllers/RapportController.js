app.controller('RapportController', function($scope, connectionService) {
	$scope.message = "Mijn test";

	connectionService.getConnections().then(function(response) {
		$scope.connectionsCount = response.data;

		console.log(response.data);
	});

});