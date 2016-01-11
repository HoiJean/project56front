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
		var positions = [];
		
		var myMarkers = [
		       {id: 1, latitude: 50.948968, longitude: 6.944781},
		       {id: 2, latitude: 50.94129, longitude: 6.95817},
		       {id: 3, latitude: 50.9175, longitude: 6.943611}
		     ];
		var cities = [
			{id: 1, "latitude": 50.948968, "longitude": 6.944781},
			{id: 2, "latitude": 50.94129, "longitude": 6.95817},
			{id: 3, "latitude": 50.9175, "longitude": 6.943611}
		];


		// $scope.marker = myMarkers;
		$scope.markers = cities;

		$scope.map = {
		      center: {
		        latitude: 50.9175,
		        longitude: 6.943611
		      },
		      zoom: 8,
		      bounds: {}
		    };
		    $scope.options = {
		      scrollwheel: false
		    };

		    var createRandomMarker = function(i, bounds, idKey) {
		      var lat_min = bounds.southwest.latitude,
		        lat_range = bounds.northeast.latitude - lat_min,
		        lng_min = bounds.southwest.longitude,
		        lng_range = bounds.northeast.longitude - lng_min;

		      if (idKey == null) {
		        idKey = "id";
		      }

		      var latitude = lat_min + (Math.random() * lat_range);
		      var longitude = lng_min + (Math.random() * lng_range);
		      var ret = {
		        latitude: latitude,
		        longitude: longitude,
		        title: 'm' + i
		      };
		      ret[idKey] = i;
		      return ret;
		    };

		    $scope.randomMarkers = [];
		    // Get the bounds from the map once it's loaded
		    $scope.$watch(function() {
		      return $scope.map.bounds;
		    }, function(nv, ov) {
		      // Only need to regenerate once
		      if (!ov.southwest && nv.southwest) {
		        var markers = [];
		        for (var i = 0; i < 5; i++) {
		          //markers.push(createRandomMarker(i, $scope.map.bounds))
		        }
		        $scope.randomMarkers = myMarkers;
		        console.log($scope.randomMarkers);
		      }
		    }, true);


		// $scope.map = { center: { latitude: 50.948968, longitude: 6.944781 }, zoom: 8 };

		
	});
});