App.Views.SongCreate = Backbone.View.extend({
  el: "#new-song-modal",

  events: {
    'click .submit': 'createSong',
    'click .close': 'toggleForm'
  },

  toggleForm: function(){
    var display = this.$el.css("display");
    console.log(display);
    if (display == "none"){
      this.$el.css("display", "block");
    }
    else{
      this.$el.css("display", "none");
      App.Routers.Songs.navigate('', {trigger:true});
    }
  },

  createSong: function(){
    event.preventDefault();
    console.log("submit button working");
    var data = {
      artist: this.$("#new-song-artist").val(),
      title: this.$("#new-song-title").val(),
      genre: this.$("#new-song-genre").val(),
      audio_url: this.$("#new-song-audio-url").val(),
      album_art_url: this.$("#new-song-album-art").val(),
    };
    this.collection.create(data);
    this.$el.find("input, textarea").val("");
    this.toggleForm();
  }
});
