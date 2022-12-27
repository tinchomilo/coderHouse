import express from 'express'
import products from './routes/products.js'
import carts from './routes/carts.js'

const app = express()

// Middlewares
app.use( express.json() )
app.use( express.urlencoded( { extended: true } ) )

// Rutas
app.use( '/', products )
app.use( '/', carts )


// Server
app.listen( 3000, () => {
    console.log( 'Server running on port 3000' )
})