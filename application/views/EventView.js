App.Views.EventView = Backbone.View.extend({
	el: $(".event"),

	initialize: function() {
		this.render();

		console.log("Event View");
	},

	render: function() {
		var template = _.template( $("#event_template").html(), this.model.toJSON() );
		this.$el.html(template);

		return this;
	}
});

// Widget for connection
App.Views.EventWidgetView = Backbone.View.extend({
	el: $(".eventCount"),

	template: _.template( $("#widget_event_template").html() ),

	initialize: function() {
		console.log("Widget Event created.");
		console.log("Counting..." + this.model);
		this.render();
	},

	render: function() {
		var data = {eventsCount: this.model};

		var temp = this.template(data);
		this.$el.html(temp);

		return this;
	}
});