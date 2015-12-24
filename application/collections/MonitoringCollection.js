App.Collections.MonitoringCollection = Backbone.Collection.extend({
	url: 'http://api.webtronix.nl/api/monitoring/',
	model: App.Models.Monitoring,

	initialize: function() {
		// this.fetch();
	}
});