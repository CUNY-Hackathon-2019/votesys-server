const groupHandler = require('../App');

module.exports = (io) => {

    io.on('connection', function (socket) {
        console.log(`${socket.id} has connected to the server`);
        
        socket.on('voteBlock', block =>{
            //console.log( block.chain_state + " " + block.block.signed_key + " " + block.block.vote_id);
            //console.log(block.voteBlock);
            io.emit('updateLedger', block.voteBlock);
        });

        // socket.on('retrieve-ledger', () =>{
        //     io.clients((error,clients) => {
        //         if(error)
        //             throw error;
        //         if(clients.length != 0)
        //         {
        //             let rIndex = Math.floor(Math.random() * (clients.length-1));
        //             let randUser = clients[rIndex];
        //             let socketID = socket.id;
        //             io.to(randUser).emit('init-ledger', {socketID});
        //         }
        //     })
        // })

        // socket.on('sending-init-ledger', ({Ledger,socketID}) => {
        //     io.to(socketID).emit('recieved-init-ledger', Ledger);
        // })

    });
}