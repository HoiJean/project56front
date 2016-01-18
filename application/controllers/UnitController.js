app.controller('UnitController', function($scope, $http, connectionService, eventService, monitoringService, positionService, $routeParams) {


	connectionService.getConnectionsByUnit($routeParams.id).then(function(response) {

		$scope.connections		= response.data;
	});


	$scope.currentPage = 1;

	$scope.tracks = [];
	getData();


	function getData() {
		$http.get("https://ws.spotify.com/search/1/track.json?q=kaizers+orchestra&page=" + $scope.currentPage)
		.then(function(response) {
			$scope.totalItems = response.data.info.num_results
			angular.copy(response.data.tracks, $scope.tracks)
		});
	}

	$scope.pageChanged = function() {
		getData();
	};



	eventService.getEventsByUnit($routeParams.id).then(function(response) {

		$scope.events 				= response.data;
	});

	monitoringService.getMonitoringByUnit($routeParams.id).then(function(response) {

	   $scope.monitoring		= response.data;
	});

	positionService.getPositionsByUnit($routeParams.id).then(function(response) {
		$scope.positions			= response.data;
	});

});
