import express from 'express'

const router = express.Router()

router.get('/', ( req, res ) => {
    res.render('test', {
        title: 'todo ok',
    })
})





export default router