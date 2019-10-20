const groupHandler = require('../App');

module.exports = (io) => {

    io.on('connection', function (socket) {
        console.log(`${socket.id} has connected to the server`);
        
        socket.on('voteBlock', block =>{
            console.log(block.user + "  " + block.pass + "  " + block.vote);
        });

    });
}