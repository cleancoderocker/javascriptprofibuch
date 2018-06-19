'use strict';
const mqtt = require('mqtt');
const HOSTNAME = 'localhost';
const PORT = 1883;
const CLIENT_ID = 'MQTT.js Node.js Client Consumer';
const client = mqtt.connect(
  `mqtt://${HOSTNAME}:${PORT}`,
  {
    clientId: CLIENT_ID
  }
);

client.on('connect', () => {
  console.log('Consumer connected to MQTT broker');
  client.subscribe('home/garage/lightSensor');
});
client.on('message', (topic, message) => {
  console.log(message.toString());
});
