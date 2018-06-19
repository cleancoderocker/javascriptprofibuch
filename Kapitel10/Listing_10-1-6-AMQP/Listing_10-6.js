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
const exchange = 'example-direct-exchange';
const queue = 'example-queue';
const key = 'example-key';
amqp
  .connect(configuration)
  .then(connection => connection.createChannel())
  .then(channel => {
    channel
      .assertExchange(exchange, 'direct')
      .then(ok => {
        return channel
          .assertQueue(queue)
          .then(ok => channel.bindQueue(queue, exchange, key));
      })
      .then(ok => {
        channel.publish(exchange, key, new Buffer('Hello World!'));
      });
  });
