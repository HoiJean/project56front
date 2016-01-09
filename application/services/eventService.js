app.service('eventService', function($http, $q) {
	var url = "http://api.webtronix.nl/api/events";

	this.getEvents = function() {
		return $http.get(url);
	}

	this.getEventsByDate = function(date) {
		return $http.get(url+"?datetime="+date);
	}
});
