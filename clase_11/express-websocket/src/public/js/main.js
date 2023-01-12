const socket = io()

socket.on('mensaje', ( data ) => {
    console.log(data)
})

socket.emit('mensaje', 'mensaje del cliente')