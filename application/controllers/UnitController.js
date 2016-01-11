app.controller('UnitController', function($scope, connectionService, eventService, monitoringService, positionService, $routeParams) {


	connectionService.getConnectionsByUnit($routeParams.id).then(function(response) {

		console.log("zou werken");
		$scope.connections		= response.data;
		console.log($scope.connections);
	})

	eventService.getEventsByUnit($routeParams.id).then(function(response) {

		console.log("ik geloof dat het werkt");
		$scope.events 				= response.data;
		console.log($scope.events);
	});

	monitoringService.getMonitoringByUnit($routeParams.id).then(function(response) {

		console.log("werkt");
	   $scope.monitoring		= response.data;
		console.log($scope.monitoring);
	});

	positionService.getPositionsByUnit($routeParams.id).then(function(response) {
		console.log("werkt ook");
		$scope.positions			= response.data;
		console.log($scope.positions);
	});

});
