// Connections model
var connections = Backbone.Model.extend({
  defaults: {
    id: 0,
    datetime: '01-01-2015-01:01:01',
    port: '',
    value: 0.0
  }
});

// new instance of model
var connection1 = new connections({
  id: 1,
  datetime: '02-01-2015-01:02:02',
  port: 'Port Een',
  value: 0.1
});

// new instance of model
var connection2 = new connections({
  id: 2,
  datetime: '03-01-2015-01:03:03',
  port: 'Port Twee',
  value: 0.3
});

// new instance of model
var connection3 = new connections({
  id: 3,
  datetime: '04-01-2015-01:04:04',
  port: 'Port Drie',
  value: 0.5
});

// Connections collection
var ConCollection = Backbone.Collection.extend({
    model: connections,
});

// new instance of collection + add all models
var Connections = new ConCollection;
Connections.add(connection1);
Connections.add(connection2);
Connections.add(connection3);

// Collections view
var ConnectionsView = Backbone.View.extend({

  el: '#table-body',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html('');

    Connections.each(function(model) {
      var consView = new ConnectionsView({
        model: model
      });

      this.$el.append(consView.render().el);
    }.bind(this));
    return this;
  }
});

// View of one collection
var ConnectionView = Backbone.View.extend({

    tagName: 'tr',
    template: _.template($('#connections-template').html()),
    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    }
});

// Start app
var app = new ConnectionsView;
