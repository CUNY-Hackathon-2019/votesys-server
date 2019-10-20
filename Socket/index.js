module.exports = (io) => {
    io.on('connection', function(socket){
        
        //{
                // chain_id
                // timestamp
                // sender: ?username/email?
                // recipent:
                // vote:
       // }
        socket.on('recieve-voteBlock', voteInfo => {
            io.emit('send-voteblock', voteInfo)
        })
    })
}