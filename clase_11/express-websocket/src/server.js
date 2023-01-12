import express from 'express'
import handlebars from 'express-handlebars'
import { Server, Socket } from 'socket.io'
import dirname from './dirname.js'
import chat from './routes/chat.js'

const app = express()

const httpServer = app.listen(3000, () => {
    console.log('Server running on port 3000')
})

const io = new Server( httpServer )

// app.use( express.urlencoded({ extended: true }) )
// app.use( express.json() )

app.use( express.static(`${dirname}/public`))

app.engine( 'hbs', handlebars.engine({
    extname: 'hbs',
    defaultLayout: 'main'
}))

app.set('view engine', 'hbs')
app.set('views', `${dirname}/views`)

app.use('/', chat)

io.on( 'connection', ( socket ) => {
    console.log('Se ha conectado un nuevo cliente')
    socket.emit('mensaje', 'mensaje del servidor')
    socket.on('mensaje1', (data) => console.log(data))
})