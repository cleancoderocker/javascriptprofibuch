var App = Backbone.Router.extend({
    routes: {
        'users': 'users',
        'users/:userId': 'user'
    },
    users: function() {
        /* ... */
    },
    user: function(userId) {
        /* ... */
    }
});