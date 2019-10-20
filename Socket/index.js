const groupHandler = require('../App');

module.exports = (io) => {

    io.on('connection', function (socket) {
        console.log(`${socket.id} has connected to the server`);
        io.emit('refresh-dashboard');
      
        socket.on('create', roomName => {
            console.log(`attempting to create ${roomName}`)
            if (!groupHandler.exists(roomName)) { 
                groupHandler.addGroup(roomName);
                socket.join(roomName);
                console.log(`${socket.id} has joined and created ${roomName}`)
                io.sockets.in(roomName).emit('joined', socket.id);
            }
            else {
                console.log("Room already exists");
            }
        });

        socket.on('new-message', object =>{
            let {message, name} = object;
            io.to(name).emit('add-message', message);
        })
      
        socket.on('disconnect', function(){
            console.log('user disconnected');
        });
      
        socket.on('leave-current-room', (roomName) => {
            socket.leave(roomName);
            console.log(`${socket.id} has left room ${roomName}`)
        });

        socket.on('enter-group', (roomName) => {
            socket.join(roomName);
            console.log(`${socket.id} has joined room ${roomName}`);
        })

        socket.on('refresh', (object) =>{
            if(object.hasOwnProperty('newGroup'))
            {
                io.emit('refresh-add-groups', object);
            }
            if(object.hasOwnProperty('invite'))
            {
                io.emit('refresh-invitations', object);
            }
            if(object.hasOwnProperty('group'))
            {
                io.emit('refresh-existing-group', object)
            }
            if(object.hasOwnProperty('shrinkedGroup'))
            {
                io.emit('refresh-shrinked-group',object);
            }
            //broadcast to all connected clients
        })
      });
}