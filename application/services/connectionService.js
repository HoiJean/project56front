app.service('connectionService', function($http, $q) {
	var url = "http://api.webtronix.nl/api/connections";

	var allConnections = {};

	this.getConnections = function() {
		return $http.get(url);
	}

});  