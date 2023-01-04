import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('primer servidor express')
})

app.get('/bienvenida', ( req, res ) => {
    res.send('<h1 style="color: blue;">Bienvenido al servidor express</h1>')
})

app.get('/usuario', ( req, res ) => {
    const usuario = {
        name: 'Martin',
        age: 42,
        surname: 'Milone'
    }
    res.json(usuario)
})

app.listen( 3000, () => {
    console.log('servior running on port 3000')
})