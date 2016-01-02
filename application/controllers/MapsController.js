app.controller('MapsController', function($scope, uiGmapGoogleMapApi, uiGmapLogger) {
	// Do stuff with your $scope.
	// Note: Some of the directives require at least something to be defined originally!
	// e.g. $scope.markers = []

	// uiGmapGoogleMapApi is a promise.
	// The "then" callback function provides the google.maps object.

	$scope.message = "Hello Maps";

	// $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

	// console.log($scope.map);

	uiGmapGoogleMapApi.then(function(maps) {
		// console.log("Hello");
		// uiGmapLogger.currentLevel = uiGmapLogger.LEVELS.debug;

		myMarkers = [
		       {id: 1, "latitude": 50.948968, "longitude": 6.944781},
		       {id: 2, "latitude": 50.94129, "longitude": 6.95817},
		       {id: 3, "latitude": 50.9175, "longitude": 6.943611}
		     ];

		$scope.marker = {id: 1, "latitude": 50.948968, "longitude": 6.944781};

		$scope.map = { center: { latitude: 50.948968, longitude: 6.944781 }, zoom: 8 };

		
	});
});