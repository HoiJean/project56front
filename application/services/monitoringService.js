app.service('monitoringService', function($http, $q) {
	var url = "http://api.webtronix.nl/api/monitoring";

	this.getMonitoring = function() {
		return $http.get(url);
	}

	this.getMonitoringByDate = function(date) {
		return $http.get(url+"?datetime="+date);
	}
});
