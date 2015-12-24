App.Models.Event = Backbone.Model.extend({
	url: 'http://api.webtronix.nl/api/events/',
	defaults: {
		datetime: "",
		value: "",
		port: "",
		unit_id: ""
	}
});

