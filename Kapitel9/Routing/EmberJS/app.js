App = Ember.Application.create();

App.Router.map(function() {
    this.resource('users');
    this.resource('user', { path: '/user/:userId' });
});