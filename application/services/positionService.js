app.service('positionService', function($http, $q) {
	var url = "http://api.webtronix.nl/api/positions";
	
	this.getPositions = function() {
		return $http.get(url);
	}

	// this.getPositionsByDate = function(date) {
	// 	return $http.get(url+"?datetime="+date);
	// }

});  