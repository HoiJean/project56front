app.controller('MapsController', function($scope, uiGmapGoogleMapApi, uiGmapLogger, positionService) {
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
		
		var unitId = 357566000058064;

		// var positionsByUnit = [
		// 	{
		// 				"id": 1,
		// 				"datetime": "2015-03-10T00:00:02",
		// 				"unit_id": 357566000058106,
		// 				"rdx": 158126,
		// 				"rdy": 380446,
		// 				"speed": 0,
		// 				"course": 31,
		// 				"numsatel": 7,
		// 				"hdop": 1,
		// 				"quality": "Gps"
		// 			}
		// ];
		// Marker: {"id":3,"icon":"assets/images/plane.png","latitude":37,"longitude":-122,"showWindow":false,"title":"Plane","options":{"labelContent":"Markers id 3","labelAnchor":"26 0","labelClass":"marker-labels"}}
		positionService.getPositionsByUnit(unitId).then(function(response) {

			var positionsByUnit = response.data;

			var positionsMarkers = [];

			console.log(positionsByUnit[0].datetime);

			for(var i = 0; i < positionsByUnit.length; i++) {
				// var pos = positionsByUnit[i];
				var pos = {};
				var currentUnit = positionsByUnit[i];
				pos.id = i;
				loc = ConvertRDtoLatLng(currentUnit.rdx, currentUnit.rdy);

				pos.latitude = loc.lat;
				pos.longitude = loc.lng;
				pos.unit_id = currentUnit.unit_id;

				var unitDate = new Date(currentUnit.datetime);
				// console.log("DateString: " + unitDate.toDateString());
				// console.log("To string: " + unitDate.toString());
				// console.log("To timeString: " + unitDate.toTimeString());
				// console.log("To Utc string: " + unitDate.toUTCString());
				// console.log("To Locale Time string: " + unitDate.toLocaleTimeString());
				// console.log("To Locale Date string: " + unitDate.toLocaleString());


				// pos.title = currentUnit.datetime;
				console.log(unitDate.toLocaleString());

				pos.title = {date: unitDate.toLocaleString(), speed: currentUnit.speed, quality: currentUnit.quality};
				pos.options = {labelContent:"Markers id 3",labelAnchor:"26 0",labelClass:"marker-labels"};

				positionsMarkers.push(pos);
			}

			$scope.onClick = function(marker, eventName, model) {
			            console.log("Clicked!");
			            model.show = !model.show;
			        };

			$scope.map = {
			      center: {
			        latitude: positionsMarkers[0].latitude,
			        longitude: positionsMarkers[0].longitude
			      },
			      zoom: 7,
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

			    $scope.citygisMarkers = [];
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
			        $scope.citygisMarkers = positionsMarkers;
			        // console.log($scope.randomMarkers);
			      }
			    }, true);	

		});

		


		// $scope.map = { center: { latitude: 50.948968, longitude: 6.944781 }, zoom: 8 };

		
	});
});