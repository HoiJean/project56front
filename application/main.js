
var myConnection = new App.Models.Connection();
var myCollection = new App.Collections.ConnectionCollection();

myCollection.fetch({success: function(data){
    console.log(data);
}});
