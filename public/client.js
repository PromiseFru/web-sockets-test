$(document).ready(() => {
    var socket = io();
    $('form').submit((e) => {
        e.preventDefault();
        socket.emit('chat message', $('#chat').val());
        return false;
    })
    socket.on('chat message', (msg) => {
        $('#messages').append($('<li>').text(msg));
    })
})