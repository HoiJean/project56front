App.Models.Connection = Backbone.Model.extend({
	url: 'http://api.webtronix.nl/api/connections/',
	defaults: {
		datetime: "",
		value: "test value",
		port: "",
		unit_id: ""
	}
});

