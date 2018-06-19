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
      channel.sendToQueue(queue, new Buffer('Hello World!'));
      console.log(` [x] Sent Hello World!`);
    });
    setTimeout(() => {
      connection.close();
      process.exit(0);
    }, 500);
  }
);
