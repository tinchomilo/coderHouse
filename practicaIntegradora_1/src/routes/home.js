import express from "express";
import productDao from "../dao/productDao.js";

const router = express.Router();

router.get('/', async ( req, res ) => {
    const users = await productDao.getUsers();
    res.render('home', {
        users,
        style: 'styles.css',
        title: 'home'
    })
})



export default router;