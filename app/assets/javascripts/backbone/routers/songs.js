App.Routers.Songs = Backbone.Router.extend({
  routes: {
    '': 'index',
    "songs/new": "newSong",
  },
  initialize: function() {
    console.log("Initialize song view");
    App.Collections.songs = new App.Collections.Songs();
    App.Views.SongList = new App.Views.SongList({collection: App.Collections.songs});
    App.Views.songCreateView = new App.Views.SongCreate({collection: App.Collections.songs});
    App.Views.player = new App.Views.Player({collection: App.Collections.songs});
  },

  index: function(){
    App.Collections.songs.fetch({reset: true});
  },

  newSong: function(){
    App.Collections.songs.fetch({reset: true});
    App.Views.songCreateView.toggleForm();
  },

});
