app.service('monitoringService', function($http, $q) {
	var url = "http://api.webtronix.nl/api/monitoring";

	var allMonitoring = {};

	this.getMonitoring = function() {
		return $http.get(url);
	}

	this.getMonitoringCount = function() {
		return $http.get(url+"?count");
	} 

	// this.getMonitoringByDate = function(date) {
	// 	return $http.get(url+"?begintime="+date);
	// }
});
