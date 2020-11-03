const express = require('express');
const app = express();
const http = require('http').createServer(app);
var io = require('socket.io')(http);
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

io.on('connection', socket => {
    console.log('Client connected');
    socket.on('chat message', (msg) => {
        io.emit('chat message', (msg));
        console.log(msg);
    })
});

http.listen(port, console.log(`Server started on port ${port}`));