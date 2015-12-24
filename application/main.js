
var myConnection = new App.Models.Connection();
var connectionCollection = new App.Collections.ConnectionCollection();
var eventCollection = new App.Collections.EventCollection();
var monitoringCollection = new App.Collections.MonitoringCollection();

connectionCollection.fetch({success: function(data){
	var connectionCount = data.length;

    var myConnectionWidgetView = new App.Views.ConnectionWidgetView({model: connectionCount });
}});

eventCollection.fetch({success: function(data){
	var eventCount = data.length;

    var myEventWidgetView = new App.Views.EventWidgetView({model: eventCount });
}});

monitoringCollection.fetch({success: function(data){
	var monitoringCount = data.length;

    var myMonitoringWidgetView = new App.Views.MonitoringWidgetView({model: monitoringCount });
}});

var AppRouter = Backbone.Router.extend({
	routes: {
		"test" : "testRoute"
	},

	testRoute: function() {
		console.log("Testing Routes");
	}
});

var router = new AppRouter();
Backbone.history.start();
