import express from 'express'

const router = express.Router()

router.get('/register', ( req, res ) => {
    res.render( 'form', {
        title: 'registro',
        style: 'style.css'
    })
})

router.post('/usuario', ( req, res ) => {
    const { name, mail, password } = req.body
    const usuario = {
        name,
        mail,
        password
    }
    console.log(usuario)

    res.status(201).json({
        res: 'ok',
        usuario
    })
})
export default router