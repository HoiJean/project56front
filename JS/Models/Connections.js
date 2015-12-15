// Connections model
var ConnectionModel = Backbone.Model.extend({
  defaults: {
    id: 0,
    datetime: '01-01-2015-01:01:01',
    port: '',
    value: 0.0
  }
});

// new instance of model
var connection1 = new ConnectionModel({
  id: 1,
  datetime: '02-01-2015-01:02:02',
  port: 'Port Een',
  value: 0.1
});

// new instance of model
var connection2 = new ConnectionModel({
  id: 2,
  datetime: '03-01-2015-01:03:03',
  port: 'Port Twee',
  value: 0.3
});

// new instance of model
var connection3 = new ConnectionModel({
  id: 3,
  datetime: '04-01-2015-01:04:04',
  port: 'Port Drie',
  value: 0.5
});
