App.Collections.ConnectionCollection = Backbone.Collection.extend({
	url: 'http://api.webtronix.nl/api/connections/',
	model: App.Models.Connection,

	initialize: function() {
		
	}
});