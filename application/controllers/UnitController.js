app.controller('UnitController', function($scope, eventService, monitoringService, positionService) {

	console.log("aa");
	eventService.getEvents().then(function(response) {

		console.log("ik geloof dat het werkt");
		// let wel op je namen -_-

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

});
