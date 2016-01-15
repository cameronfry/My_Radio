App.Views.Song = Backbone.View.extend({
  className: 'song',
  tagName: 'div',

  events: {
    'click .song-image': 'renderPlayer'
  },

  initialize: function(){
    this.template = HandlebarsTemplates['songs/show'];
    this.render();
  },

  render: function(){
    event.preventDefault();
    this.$el.html(this.template(this.model.toJSON()));
  },

  renderPlayer: function(){
    event.preventDefault();

    model = this.model;
    App.Views.player.displaySong(model);

    console.log("rendering player action");
  }
})
