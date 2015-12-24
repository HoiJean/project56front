App.Collections.EventCollection = Backbone.Collection.extend({
	url: 'http://api.webtronix.nl/api/events/',
	model: App.Models.Event,

	initialize: function() {
		// this.fetch();
	}
});