const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    io.emit('someone connected', 'hugs🤗! new friend is here!')
    socket.on('chat message', ({ nick, msg }) => {
        io.emit('chat message', `${nick}: ${msg}`);
    });
    socket.on('typing', ({ nick }) => {
        io.emit('someone is typing', `${nick} is typing!`)
    })
    socket.on('disconnect', () => {
        io.emit('someone disconnected', `a friend left us!`)
    })
});
server.listen(3000, () => {
    console.log('listening on *:3000');
});
