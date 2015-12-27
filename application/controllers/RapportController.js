app.controller('RapportController', function($scope, connectionService) {
	$scope.message = "Mijn test";

	connectionService.getConnections().then(function(response) {
		$scope.connections 		= response.data;
		$scope.connectionTable	= "";
		$scope.connectionEvents	= "";

		angular.forEach($scope.connections, function(value) {
			
			$scope.connectionTable += "<tr>";

			$scope.connectionTable += "<td>" + value.Datetime + "</td>";
			$scope.connectionTable += "<td>" + value.Value + "</td>";
			$scope.connectionTable += "<td>" + value.Port + "</td>";
			$scope.connectionTable += "<td>" + value.Unit_id + "</td>";

			$scope.connectionTable += "</tr>";
		});

		// console.log(response.data);
	});

	connectionService.getEvents().then(function(response) {
		$scope.events 		= response.data;
		$scope.eventsTable	= "";

		angular.forEach($scope.events, function(value) {
			
			$scope.eventsTable += "<tr>";

			// $scope.eventsTable += "<td>" + value.Datetime + "</td>";
			// $scope.eventsTable += "<td>" + value.Value + "</td>";
			// $scope.eventsTable += "<td>" + value.Port + "</td>";
			// $scope.eventsTable += "<td>" + value.Unit_id + "</td>";

			$scope.eventsTable += "</tr>";
		});

		// console.log(response.data);
	});

});