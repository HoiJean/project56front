app.controller('RapportController', function($scope, connectionService, eventService, monitoringService) {

	connectionService.getConnections().then(function(response) {

		$scope.connections 		= response.data;
	});

	 eventService.getEvents().then(function(response) {

		 $scope.events				= response.data;
	 });

	 monitoringService.getMonitoring().then(function(response) {

		 $scope.monitoring		= response.data;

	 });
 });

	//  connectionService.getEvents().then(function(response) {
	// 	$scope.events 		= response.data;
	// 	$scope.eventsTable	= "";
	//
	// 	angular.forEach($scope.events, function(value) {
	//
	// 		$scope.eventsTable += "<tr>";
	//
	// 		$scope.eventsTable += "<td>" + value.Datetime + "</td>";
	// 		$scope.eventsTable += "<td>" + value.Value + "</td>";
	// 		$scope.eventsTable += "<td>" + value.Port + "</td>";
	// 		$scope.eventsTable += "<td>" + value.Unit_id + "</td>";
	//
	// 		$scope.eventsTable += "</tr>";
	// 	});
	//
	// 	console.log(response.data);
	// });
