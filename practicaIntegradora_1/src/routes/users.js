import express from 'express';
import productDao from '../dao/productDao.js';


const router = express.Router();

router.get('/', ( req, res ) => {
    res.render('index', {
        title: 'test',
        style: 'styles.css',
        msg: 'funciona todo ok!!!'
    })
})

router.post('/', async( req, res ) => {

    try {
        await productDao.createUser(req.body)

    } catch (error) {
        console.error(error.message)
    }
    res.json(req.body)
})




export default router