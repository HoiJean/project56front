App.Models.Monitoring = Backbone.Model.extend({
	url: 'http://api.webtronix.nl/api/monitoring/',
	defaults: {
		datetime: "",
		begin_time: "",
		end_time: "",
		type: "",
		min: "",
		max: "",
		sum: "",
	}
});

