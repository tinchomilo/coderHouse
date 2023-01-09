import express from 'express'

const router = express.Router()

const texto = {
    encabezado: 'titulo del texto enviado',
    subtitulo: 'subtitulo del lorem',
    cuerpo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga mollitia corrupti dolores ipsam error, neque saepe illum ut incidunt accusamus!'
}

router.get('/lorem', ( req, res ) => {
    res.render( 'lorem', {
        texto,
        style: 'style.css'
    })
})

export default router