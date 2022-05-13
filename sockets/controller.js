const socketController = (socket) => {
    // pantalla de programar colas
    //http://localhost:8080/

    // pantalla de mostrar tiquetes
    // http://localhost:8080/publico.html

    socket.on('enviar-mensaje', (payload, callback) => {

        const id = 123456789;
        callback(id);

        socket.broadcast.emit('enviar-mensaje', payload);
    })
}

module.exports = {
    socketController
}

