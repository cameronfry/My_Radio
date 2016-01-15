App.Views.Player = Backbone.View.extend({
  el: '#player',

  initialize: function(){
    this.template = HandlebarsTemplates['songs/player'];
  },

  displaySong: function(model){
      this.$el.html(this.template(model.toJSON()));
      App.Routers.Songs.navigate('songs/' + model.id + '/play')
  }
});
