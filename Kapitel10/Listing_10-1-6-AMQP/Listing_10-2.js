'use strict';
const amqp = require('amqplib/callback_api');
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
amqp.connect(
  configuration,
  (error, connection) => {
    connection.createChannel((error, channel) => {
      channel.assertQueue(queue);
      channel.consume(queue, message => {
        if (message !== null) {
          console.log(message.content.toString());
          channel.ack(message);
        }
      });
    });
  }
);
