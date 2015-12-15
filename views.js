// View of one collection
var ConnectionView = Backbone.View.extend({

    tagName: 'tr',
    template: _.template($('#connections-template').html()),
    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    }
});

// Collections view
var ConnectionsView = Backbone.View.extend({

  el: '#table-body',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html('');

    Connections.each(function(model) {
      var consView = new ConnectionView({
        model: model
      });

      this.$el.append(consView.render().el);
    }.bind(this));
    return this;
  }
});

// Start app
var app = new ConnectionsView();
