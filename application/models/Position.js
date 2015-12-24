App.Models.Position = Backbone.Model.extend({
	url: 'http://api.webtronix.nl/api/positions/',
	defaults: {
		datetime: "",
		value: "test value",
		port: "",
		unit_id: ""
	}
});

