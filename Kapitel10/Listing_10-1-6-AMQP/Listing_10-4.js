'use strict';
const amqp = require('amqplib');
const configuration = {
  hostname: '<server_url>',
  username: '<user_name>',
  password: '<password>',
  connectionTimeout: 10000,
  authMechanism: 'AMQPLAIN',
  vhost: '/',
  noDelay: true,
  ssl: {
    enabled: true
  }
};
const queue = 'example-queue';
amqp
  .connect(configuration)
  .then(connection => connection.createChannel())
  .then(channel => {
    return channel.assertQueue(queue).then(ok => {
      return channel.consume(queue, message => {
        if (message !== null) {
          console.log(message.content.toString());
          channel.ack(message);
        }
      });
    });
  });
