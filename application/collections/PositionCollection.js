App.Collections.PositionCollection = Backbone.Collection.extend({
	url: 'http://api.webtronix.nl/api/positions/',
	model: App.Models.Position,

	initialize: function() {
		// this.fetch();
	}
});