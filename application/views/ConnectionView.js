App.Views.ConnectionView = Backbone.View.extend({
	el: $(".connection"),

	initialize: function() {
		this.render();

		console.log("Connection View");
	},

	render: function() {
		var template = _.template( $("#connection_template").html(), this.model.toJSON() );
		this.$el.html(template);

		return this;
	}
});

// Widget for connection
App.Views.ConnectionWidgetView = Backbone.View.extend({
	el: $(".connectionsCount"),

	template: _.template( $("#widgets_template").html() ),

	initialize: function() {
		console.log("Widget Connection created.");
		console.log("Counting..." + this.model);
		this.render();
	},

	render: function() {
		var data = {connectionsCount: this.model};

		var temp = this.template(data);
		this.$el.html(temp);

		return this;
	}
});