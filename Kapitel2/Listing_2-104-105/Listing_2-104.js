const ws = require('websocket');
const http = require('http');
const WebSocketServer = ws.server;

const server = http.createServer((request, response) => {
    response.end();
});
server.listen(8080, () => {
    console.log('Server is listening on port 8080');
});

const wsServer = new WebSocketServer({
  httpServer: server,
  autoAcceptConnections: false
});
wsServer.on('request', request => {
  const connection = request.accept('echo-protocol', request.origin);
  setInterval(() => {
    connection.sendUTF(Math.floor(Math.random() * 100) + 1);
  }, 200);
  connection.on('close', (reasonCode, description) => {
    console.log(
      new Date() + ' Peer ' + connection.remoteAddress + ' disconnected.'
    );
  });
});
