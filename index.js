const PORT = 8080 || process.env.PORT
const express = require('express')
const app = express();
const http = require('http');
const server = http.Server(app);
const io = require('socket.io')(server);
server.listen(PORT);


const db = require('./database')
const apiRoutes = require('./apiRoutes')
const bodyParser = require('body-parser')

db.sync({ force: false }).then(async () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use('/api', apiRoutes)
    app.use('/', (req, res) => res.send("Hello"))

    app.listen(PORT, ()=>{
        console.log(`Server is running on PORT${PORT}`);
    })
})