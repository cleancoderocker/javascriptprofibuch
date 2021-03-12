'use strict';
const mqtt = require('mqtt');
const HOSTNAME = 'localhost';
const PORT = 1883;
const CLIENT_ID = 'MQTT.js Node.js Client Publisher';
const client = mqtt.connect(
  `mqtt://${HOSTNAME}:${PORT}`,
  {
    clientId: CLIENT_ID
  }
);
client.on('connect', () => {
  console.log('Publisher connected to MQTT broker');
  client.publish('home/garage/lightSensor', '12.2');
});
