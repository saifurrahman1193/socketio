module.exports = (app, expressServer) => {

    const moment = require('moment');
    const {
        Server
    } = require("socket.io");
    const io = new Server(expressServer);


    io.on('connection', (socket) => {
        console.log('A user is connected');
        socket.on('chat', (msg) =>{
            socket.emit('chat_message',msg)
        })
    })

};