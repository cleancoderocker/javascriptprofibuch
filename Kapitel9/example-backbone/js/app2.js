(function($){
    var User = Backbone.Model.extend({
        defaults: {
            firstname: '',
            lastname: ''
        }
    });

    var UserList = Backbone.Collection.extend({
        model: User
    });

    var UserView = Backbone.View.extend({
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
                + '<input class="firstname" value="' + item.get('firstname') + '"/>'
                + '<input class="lastname" value="' + item.get('lastname') + '"/>'
                + '</li>');
        },
        events: {
            "change .firstname" : "handleChangedFirstName",
            "change .lastname" : "handleChangedLastName"
        },
        handleChangedFirstName: function(t) {
            alert("Changed first name");
        },
        handleChangedLastName: function(t) {
            alert("Changed first name");
        }
    });

    var userList = new UserList([
        new User({
            firstname: 'Max',
            lastname: 'Mustermann'
        }),
        new User({
            firstname: 'Moritz',
            lastname: 'Mustermann'
        })
    ]);

    var listView = new UserView({
        collection: userList
    });
})(jQuery);
