app.service('eventService', function($http, $q) {
	var url = "http://api.webtronix.nl/api/events";

	var allEvents = {};

	this.getEvents = function() {
		return $http.get(url);
	}

	this.getEventsCount = function() {
		return $http.get(url+"?count");
	}

	this.getEventsByUnit = function(unitId) {
		return $http.get(url+"?Fromunit="+unitId);
	}

	this.getEventsUrl = function() {
		return $http({
		    method: 'GET',
		    url: url,
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		});
		
	}
});
