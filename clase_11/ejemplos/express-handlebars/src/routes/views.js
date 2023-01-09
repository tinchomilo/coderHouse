import express from 'express'

const router = express.Router()

router.get('/', ( req, res ) => {
    res.render( 'datos', {
        title: 'datos personales',
        name: 'martin',
        age: 42,
        mail: 'tincho@mail.com'
    })
})


export default router