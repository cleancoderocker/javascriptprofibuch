(function($){
    var Album = Backbone.Model.extend({
        defaults: {
            title: '',
            artist: ''
        }
    });

    var AlbumList = Backbone.Collection.extend({
        model: Album
    });

    var AlbumView = Backbone.View.extend({
        el: $('body'),
        initialize: function(){
            this.render();
        },
        render: function(){
            var self = this;
            $(this.el).append('<ul></ul>');
            _(this.collection.models).each(function(item) {
                self.appendItem(item);
            }, this);
        },
        appendItem: function(item){
            var list = $('ul', this.el);
            var listItem = list.append('<li>'
                + '<input class="title" value="' + item.get('title') + '"/>'
                + '<input class="artist" value="' + item.get('artist') + '"/>'
                + '</li>');
        },
        events: {
            'change .title' : 'handleChangedTitle',
            'change .artist' : 'handleChangedArtist'
        },
        handleChangedTitle: function(t) {
            alert('Changed title');
        },
        handleChangedArtist: function(t) {
            alert('Changed artist');
        }
    });

    var albumList = new AlbumList([
        new Album({
            title: 'Wretch',
            artist: 'Kyuss'
        }),
        new Album({
            title: 'Sky Valley',
            artist: 'Kyuss'
        }),
        new Album({
            title: 'The Will To Live',
            artist: 'Ben Harper'
        }),
        new Album({
            title: 'Fight for Your Mind',
            artist: 'Ben Harper'
        })
    ]);

    var listView = new AlbumView({
        collection: albumList
    });
})(jQuery);
