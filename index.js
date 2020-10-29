const express = require('express');
const app = express();
const http = require('http').createServer(app);
var io = require('socket.io')(http);
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + './views/index.html');
})

io.on('connection', socket => {
    console.log('Client connected');
})

http.listen(port, console.log(`Server started on port ${port}`));