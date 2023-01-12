import express from 'express'
import handlebars from 'express-handlebars'
import dirname from './dirname.js'
import view from './routes/views.js'
import lorem from './routes/lorem.js'
import form from './routes/register.js'

const app = express()

app.use( express.urlencoded( { extended: true } ))

app.use( express.json() )

// Handlebars
app.engine( 'hbs', handlebars.engine({
    extname: 'hbs',
    defaultLayout: 'main'
}))

app.set( 'view engine', 'hbs' )
app.set( 'views', `${dirname}/views`)

// Endpoints
app.use('/', view)
app.use('/', lorem)
app.use('/', form)


app.use( express.static(`${dirname}/public`))

app.listen(4000, () => {
    console.log('server running on port 3000');
})