app.controller('UnitController', function($scope, eventService, monitoringService, positionService, $routeParams) {

	console.log("aa");
	eventService.getEvents().then(function(response) {

		console.log("ik geloof dat het werkt");

		$scope.events 				= response.data;

		console.log("oki");
	});

	monitoringService.getMonitoring().then(function(response) {

		console.log("werkt");
	   $scope.monitoring		= response.data;
		console.log("okay");
	});

	positionService.getPositions().then(function(response) {
		console.log("werkt ook");
		$scope.positions			= response.data;
		console.log("ok dan");
	});

	console.log($routeParams.id);

});
