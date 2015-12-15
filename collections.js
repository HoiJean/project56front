// Connections collection
var ConnectionCollection = Backbone.Collection.extend({
    model: ConnectionModel
});

// new instance of collection + add all models
var Connections = new ConnectionCollection();
Connections.add([connection1, connection2, connection3]);
// ConCollection.add(connection2);
// ConCollection.add(connection3);
