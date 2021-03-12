'use strict';
const HOSTNAME = 'localhost';
const PORT = 9001;
const CLIENT_ID = 'MQTT.js Browser Client Publisher';
const client = mqtt.connect(
  `ws://${HOSTNAME}:${PORT}`,
  {
    clientId: CLIENT_ID
  }
);
client.on('connect', () => {
  console.log('Publisher connected to MQTT broker');
  client.publish('home/garage/lightSensor', '12.2');
});
client.on('message', (topic, message) => {
  console.log(message.toString());
  client.end();
});
