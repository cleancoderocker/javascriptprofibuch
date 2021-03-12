'use strict';
const HOSTNAME = 'localhost';
const PORT = 9001;
const CLIENT_ID = 'MQTT.js Browser Client Consumer';
const client = mqtt.connect(
  `ws://${HOSTNAME}:${PORT}`,
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
