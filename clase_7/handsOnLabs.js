import express from "express";

const app = express()

app.use( express.urlencoded( { extended: true } ))

app.use( express.json() )

const frase = [ 'frase', 'inicial' ]


app.get( '/api/frase', ( req, res ) => {
    res.json( { frase: frase.join(' ')} )
})

app.get( '/api/palabras/:pos', ( req, res ) => {

    const { pos } = req.params

    const positionFound = frase[parseInt(pos) -1]

    positionFound
        ? res.json( { buscada: positionFound } )
        : res.send( 'Posición invalida' )
} )

app.post('/api/palabras', ( req, res) => {

    const { palabra } = req.body

    if( palabra.trim() ){
        frase.push( palabra )
        return res.json( {
            agregada: palabra,
            pos: frase.length
        } )
    }
    res.send('Debe agregar una palabra')
})

app.put('/api/palabras/:pos', ( req, res ) => {

    const { palabra } = req.body
    const { pos } = req.params

    if( palabra && parseInt( pos ) > 0 && parseInt( pos ) <= frase.length) {
        const  anterior = frase[parseInt( pos ) -1]
        frase[parseInt( pos ) -1] = palabra
        return res.json( {
            actualizada: palabra,
            anterior
        } )
    }
    res.send( 'Todos los campos son obligatorios' )
})

app.delete('/api/palabras/:pos', ( req, res ) => {
    const { pos }  = req.params
    if( pos && parseInt( pos ) > 0 && parseInt( pos ) <= frase.length) {
        const deleted = frase[parseInt(pos) -1]
        frase.splice( frase[parseInt(pos) -1], 1)
        return res.json( {
            deleted,
            frase: frase.join(' ')
        } )
    }
    res.send( 'Debe ingresar una posicion valida' )
} )


app.listen(3000, () => {
    console.log( 'server running on port 3000' )
})