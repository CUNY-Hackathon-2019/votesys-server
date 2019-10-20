const app = require('express')();
const http = require('http');
const server = http.Server(app);
const io = require('socket.io-client')(server);
server.listen(PORT);

const client_server = require('socket.io')(server);
server.listen(8080);