'use strict';
const mosca = require('mosca');
const settings = {
  port: 1883,
  backend: {
    type: 'mongo',
    url: 'mongodb://localhost:27017/mqtt',
    pubsubCollection: 'ascoltatori',
    mongo: {}
  }
};
const server = new mosca.Server(settings);
server.on('clientConnected', client => {
  console.log(`Client connected: ${client.id}`);
});
server.on('clientDisonnected', client => {
  console.log(`Client disconnected: ${client.id}`);
});
server.on('error', error => {
  console.error(error);
});
server.on('published', (packet, client) => {
  console.log(`Published: ${packet.payload}`);
});
server.on('ready', () => {
  console.log('Mosca server is up and running');
});
