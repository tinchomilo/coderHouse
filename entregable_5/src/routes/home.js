import express from 'express'
import { productsList } from '../server.js'


const router = express.Router()

router.get('/home', ( req, res ) => {

    res.render('home', {
        title: 'products',
        productsList
    })
})


export default router