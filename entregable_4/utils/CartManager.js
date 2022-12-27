import fs from 'fs'

class CartManager {
    constructor(path) {
        this.path = path
        try {
            this.carts = JSON.parse( fs.readFileSync(this.path, 'utf-8') )
        } catch (error) {
            this.carts = []
        }
    }

    addCart() {

        const cart = {
            products : []
        }

        if( this.carts.length ) {
            cart.cid = this.carts[this.carts.length -1].cid + 1
        } else {
            cart.cid = 1;
        }

        this.carts.push( cart )
        fs.writeFileSync(this.path, JSON.stringify( this.carts ), 'utf-8')
        return true;

    }

    getCartById( id ) {

        const findedCart = this.carts.find( cart => cart.cid === parseInt( id ) )

        if( findedCart ) return findedCart

        throw new Error( 'No existe un carrito con ese id' )
    }

    addProductToCart( cid, pid ) {

        const oldCart = JSON.stringify(this.carts)
        this.carts.forEach( elem => {
            if( elem.cid === cid ) {
                let qtyCheck = 0
                elem.products.forEach( prod => {
                    if( prod.pid === pid ) {
                        qtyCheck = 1
                        prod.quantity ++
                    }
                })
                if( !qtyCheck ) {
                    elem.products.push({pid, quantity: 1})
                }
            }
        })

        fs.writeFileSync(this.path, JSON.stringify( this.carts ), 'utf-8')

        if(oldCart === JSON.stringify(this.carts)) throw new Error( 'No se pudo insertar el producto' )

        return {
            ok: true,
            carts: this.carts
        }
    }
}

export default new CartManager('./carts.json')
