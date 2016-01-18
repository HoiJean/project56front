app.service('connectionService', function($http, $q) {
	var url = "http://api.webtronix.nl/api/connections";

	var allConnections = {};

	this.getConnections = function() {
		return $http.get(url);
	}

	this.getConnectionsByDate = function(date) {
		return $http.get(url+"?datetime="+date);
	}

	this.getConnectionsCount = function() {
		return $http.get(url+"?count");
	}

	this.getConnectionsByUnit = function(unitId) {
		return $http.get(url+"?Fromunit="+unitId);
	}

	this.getConnectionsByUnique = function() {
		return $http.get(url+"?GetconnectionsSorted");
	}
});
