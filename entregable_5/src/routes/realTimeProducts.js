import express from 'express'

const router = express.Router()

router.get('/realTimeProducts', ( req, res ) => {
    res.render('realTimeProducts', {
        title: 'socket realtimeProducts',
        style: 'style.css'
    })
})

router.post('/realTimeProducts', ( req, res ) => {
console.log(req.body)
res.json({body: req.body})
} )


export default router