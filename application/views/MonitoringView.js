App.Views.ConnectionView = Backbone.View.extend({
	el: $(".monitoring"),

	initialize: function() {
		this.render();

		console.log("Monitoring View");
	},

	render: function() {
		var template = _.template( $("#monitoring_template").html(), this.model.toJSON() );
		this.$el.html(template);

		return this;
	}
});

// Widget for Monitoring
App.Views.MonitoringWidgetView = Backbone.View.extend({
	el: $(".monitoringCount"),

	template: _.template( $("#widget_monitoring_template").html() ),

	initialize: function() {
		console.log("Widget Monitoring created.");
		console.log("Counting..." + this.model);
		this.render();
	},

	render: function() {
		var data = {monitoringsCount: this.model};

		var temp = this.template(data);
		this.$el.html(temp);

		return this;
	}
});