app.controller('RapportController', function($scope, connectionService) {

	connectionService.getConnections().then(function(response) {

		$scope.connections 		= response.data;


	});
});

app.controller('RapportController', function($scope, eventService) {

	 eventService.getEvents().then(function(response) {

		 $scope.events				= response.data;
	 });
	 console.log(response.data);
});

 app.controller('RapportController', function($scope, monitoringService) {

	 monitoringService.getMonitoring().then(function(response) {

		 $scope.monitoring		= response.data;

	 });
	 console.log(response.data);
 });
	//  connectionService.getEvents().then(function(response) {
	// 	$scope.events 		= response.data;
	// 	$scope.eventsTable	= "";

	// 	angular.forEach($scope.events, function(value) {

	// 		$scope.eventsTable += "<tr>";

	// 		// $scope.eventsTable += "<td>" + value.Datetime + "</td>";
	// 		// $scope.eventsTable += "<td>" + value.Value + "</td>";
	// 		// $scope.eventsTable += "<td>" + value.Port + "</td>";
	// 		// $scope.eventsTable += "<td>" + value.Unit_id + "</td>";

	// 		$scope.eventsTable += "</tr>";
	// 	});

	// 	// console.log(response.data);
	// });
