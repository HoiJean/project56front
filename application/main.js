
var myConnection = new App.Models.Connection();
var myCollection = new App.Collections.ConnectionCollection();

myCollection.fetch({success: function(data){
	var connectionCount = data.length;

    var myConnectionWidgetView = new App.Views.ConnectionWidgetView({model: connectionCount });
}});
