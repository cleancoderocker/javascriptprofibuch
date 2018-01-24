var Mediator = require("mediator-js").Mediator;
var chatroom = new Mediator();

function User(name) {
    this.name = name;
}
User.prototype.log = function(message) {
    console.log(this.name + ' empfängt Nachricht: ' + message);
}

var topic = 'Professionelles JavaScript';
var user1 = new User('Max');
var user2 = new User('Moritz');

chatroom.subscribe(topic, user1.log.bind(user1));
chatroom.subscribe(topic, user2.log.bind(user2));
chatroom.publish(topic, 'Herzlich willkommen');