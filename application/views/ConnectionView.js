App.Views.ConnectionView = Backbone.View.extend({
	el: $(".connection"),

	initialize: function() {
		this.render();

		console.log("Connection View");
	},

	render: function() {
		var template = _.template( $("#connection_template").html(), {} );
		this.$el.html(template);

		return this;
	}
});