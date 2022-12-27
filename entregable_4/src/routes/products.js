import { Router } from 'express'
import ProductManager from '../../utils/ProductManager.js'

const router = Router()

router.get('/api/products', ( req, res ) => {

    try {
        const { limit } = req.query

        limit
            ? res.status( 200 ).json( ProductManager.getProducts().slice(0, limit) )
            : res.status( 200 ).json( ProductManager.getProducts() )

    } catch (error) {
        console.log(error)
        res.status(404).json({
            ok: false,
            msg: 'Algo salio mal!!'
        })
    }

})

router.get('/api/products/:pid' , ( req, res ) => {

    const { pid } = req.params
    try {

        res.status(200).json( ProductManager.getProductById( parseInt( pid ) ) )

    } catch (error) {
        console.log(error)
        res.status(404).json({
            ok: false,
            msg: error.message
        })
    }
})

router.post('/api/products', ( req, res ) => {

    const { title, description, price, thumbnails, code, stock, status, category } = req.body

    try {

        const product = ProductManager.addProduct( title, description, price, thumbnails, code, stock, status, category )
        res.status(201).json( {
            ok: true,
            msg: 'Producto insertado exitosamente',
            product
        } )

    } catch (error) {
        console.log(error)
        res.status(404).json({
            ok: false,
            msg: error.message
        })
    }
})


router.put('/api/products/:pid', ( req, res ) => {

    const { pid } = req.params
    const { productToUpdate } = req.body

    try {

        ProductManager.updateProduct( parseInt( pid ), productToUpdate )
        res.status(200).json({
            ok: true,
            msg: 'Producto actualizado exitosamente',
            productToUpdate
        })

    } catch (error) {
        console.log(error)
        res.status(404).json({
            ok: false,
            msg: error.message
        })
    }
})

router.delete('/api/products/:pid', ( req, res ) => {

    const { pid } = req.params

    try {

        const deleted = ProductManager.deleteProduct( parseInt( pid ) )
        if( deleted ) {
            return res.status(200).json({
                ok: true,
                msg: 'Producto eliminado exitosamente',
            })
        }

    } catch (error) {
        console.log(error)
        res.status(404).json({
            ok: false,
            msg: error.message
        })
    }
})

export default router