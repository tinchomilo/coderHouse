import { Router } from 'express'
import CartManager from '../../utils/CartManager.js'

const router = Router()

router.get('/api/carts/:cid', ( req, res ) => {
    const { cid } = req.params
    try {

        const cart = CartManager.getCartById( parseInt( cid ) )
        res.status(200).json({
            ok:true,
            cart
        })

    } catch (error) {
        console.log(error)
        res.status(404).json({
            ok:false,
            msg: error.message
        })
    }
})


router.post('/api/carts', ( req, res ) => {

    try {

        CartManager.addCart()
        res.status(201).json({
            ok: true,
            mg: 'Carrito creado exitosamente'
        })

    } catch (error) {
        console.log(error)
        res.status(404).json({
            ok: false,
            msg: error.message
        })
    }
})


router.post('/api/carts/:cid/product/:pid', ( req, res ) => {

    const { cid, pid } = req.params


    try {

        const result = CartManager.addProductToCart( parseInt( cid ), parseInt( pid ) )

        res.status(200).json({
            result: result.ok,
            carts: result.carts
        })

    } catch (error) {
        console.log(error)
        res.status(404).json({
            ok: false,
            msg: error.message
        })
    }

})

export default router