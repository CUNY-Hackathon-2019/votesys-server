const PORT = 5000 || process.env.PORT
const express = require('express')
const app = express()
const db = require('./database')
const apiRoutes = require('./apiRoutes')
const bodyParser = require('body-parser')

db.sync({ force: true }).then(async () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use('/api', apiRoutes)
    app.use('/', (req, res) => res.send("Hello"))
    app.listen(PORT, ()=>{
        console.log(`Server is running on PORT${PORT}`);
    })
})