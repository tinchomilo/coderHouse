import express from 'express'
import handlebars from 'express-handlebars'
import { Server } from 'socket.io'
import dirname from './dirname.js'
import realTimeProducts from './routes/realTimeProducts.js'
import home from './routes/home.js'

const app = express()

const httpServer = app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000')
})

const io = new Server( httpServer )

app.use( express.urlencoded({ extended: true }))
app.use( express.json())

app.engine('hbs', handlebars.engine({
  extname: 'hbs',
  defaultLayout: 'main'
}))

app.set('view engine', 'hbs')
app.set('views', `${dirname}/views`)


app.use( '/', home )
app.use( '/', realTimeProducts )

app.use( express.static(`${dirname}/public/`))

export let productsList = []

io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado')

  socket.on('realTimeProducts', (data) => {

    const product = {
      title: data.title,
      description: data.description,
      price: data.price,
      thumbnails: data.thumbnails,
      code: data.code,
      stock: data.stock,
      state: data.state,
      category: data.category
    }

    if( productsList.length ) {
      product.id = productsList[productsList.length -1].id + 1
    } else {
      product.id = 1;
    }

    productsList.push(product)

    io.emit('realTimeProducts', productsList)
  })

  socket.on('deleteProduct', (id) => {
    if( id ) {
      console.log(id)
      productsList = productsList.filter( prod => prod.id != id)
      console.log(productsList)
    }

    io.emit('realTimeProducts', productsList)
  })
})