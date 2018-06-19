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
const exchange = 'example-fanout-exchange';
const queue1 = 'example-queue';
const queue2 = 'example-queue-2';
amqp
  .connect(configuration)
  .then(connection => connection.createChannel())
  .then(channel => {
    channel
      .assertExchange(exchange, 'fanout')
      .then(ok => {
        return Promise.all([
          channel
            .assertQueue(queue1)
            .then(ok => channel.bindQueue(queue1, exchange, '')),
          channel
            .assertQueue(queue2)
            .then(ok => channel.bindQueue(queue2, exchange, ''))
        ]);
      })
      .then(ok => {
        channel.publish(exchange, '', new Buffer('Hello World!'));
      });
  });
