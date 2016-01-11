app.controller('UnitController', function($scope, $http, connectionService, eventService, monitoringService, positionService, $routeParams) {


	connectionService.getConnectionsByUnit($routeParams.id).then(function(response) {

		console.log("zou werken");
		$scope.connections		= response.data;
		console.log($scope.connections);
	});






	$scope.currentPage = 1;

	$scope.tracks = [];
	getData();


	function getData() {
		$http.get("https://ws.spotify.com/search/1/track.json?q=kaizers+orchestra&page=" + $scope.currentPage)
		.then(function(response) {
			$scope.totalItems = response.data.info.num_results
			angular.copy(response.data.tracks, $scope.tracks)

			console.log("DIT IS NIEUW???");


			console.log(response.data.tracks);
		});
	}

	$scope.pageChanged = function() {
		getData();
	};






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
