const express = require("express");
const app = express();
const PORT = 4000;

const http = require('http');
const server = http.Server(app);//app.listen(PORT, () => console.log(`Sockets & Server are running on Port ${PORT}`))
const io = require('socket.io')(server);  //Socket component
server.listen(PORT);
console.log(`Sockets & Server are running on Port ${PORT}`);

const groupH = require('./Socket/GroupHandler');
const groupHandler = new groupH;
module.exports = groupHandler;
require('./Socket')(io);

const apiRouter = require("./apiRoutes");
const bodyParser = require("body-parser");
const db = require("./database");

//Force: true wipes the database clean.
//this file is only run once, when the app is started.
db.sync({ force: false }).then(async () => {
  //seed();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // app.use((req, res, next) => {
  //   res.setHeader("Access-Control-Allow-Origin", "*");
  //   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  //   res.setHeader('Access-Control-Allow-Headers',' Origin, Content-Type, X-Auth-Token');
  //   next();
  // });

  app.use("/api", apiRouter);
});

require("./PublicKeyGen");