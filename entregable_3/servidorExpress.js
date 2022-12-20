import express from 'express'
import ProductManager from './ProductManager.js'

const app = express()

app.use( express.json() )

app.use( express.urlencoded( { extended: true } ) )


app.get('/products', ( req, res ) => {

    const productsList = ProductManager.getProducts()

    const { limit } = req.query

    limit ? res.json( productsList.slice(0, limit) ) : res.json( productsList )

})

app.get('/products/:pid', ( req, res ) => {

    const { pid } = req.params

    const productById = ProductManager.getProductById( parseInt( pid ) )

    productById ? res.json( productById ) : res.send( 'No existe un producto con ese id' )

})

app.listen(3000, () => {
    console.log( 'Server listenning on port 3000' )
})