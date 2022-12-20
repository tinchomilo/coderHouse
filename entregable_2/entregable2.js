const fs = require('fs')

class ProductManager {
    constructor(path) {
        this.path = path
        this.products = []
    }
    addProduct(title, description, price, thumbnail, code, stock) {
        try {
            if( title && description && price && thumbnail && code && stock ) {
                const product = {
                    title,
                    description,
                    price,
                    thumbnail,
                    code,
                    stock
                }

                if( this.products.length ) {
                    product.id = this.products[this.products.length -1].id + 1
                } else {
                    product.id = 1;
                }

                const isPresentCode = this.products.find( product => product.code === code )
                if( !isPresentCode ) {
                    this.products.push( product )
                    fs.writeFileSync(this.path, JSON.stringify( this.products ), 'utf-8')
                    return true;
                }
                return console.log( `el code ${ code } ya esxiste` );
            }
            throw new Error( 'Todos los campos son obligatorios!!' );
        } catch (error) {
            console.log(error)
        }
    }

    getProducts() {
        try {
            return console.log( JSON.parse( fs.readFileSync(this.path, 'utf-8') ) )
        } catch (error) {
            console.log(error)
        }
    }

    getProductById( id ) {

        try {
            const productsList = JSON.parse( fs.readFileSync(this.path, 'utf-8') )

            const foundProduct = productsList.find( product => product.id === id)

            if( foundProduct ) return foundProduct

            console.log('Not found')
        } catch (error) {
            console.log(error)
        }
    }

    deleteProduct(id) {

        try {
            const productsList = JSON.parse( fs.readFileSync(this.path, 'utf-8') )

            const newProductsList = productsList.filter( product => product.id !== id)

            console.log(newProductsList)

            return fs.writeFileSync(this.path, JSON.stringify( newProductsList ), 'utf-8')
        } catch (error) {
            console.log(error)
        }

    }

    updateProduct(id, productToUpdate) {

        try {
            let productsList = JSON.parse( fs.readFileSync(this.path, 'utf-8') )

            productsList = productsList.filter( product => product.id !== id)

            productsList.push({
                ...productToUpdate,
                id
            })

            return fs.writeFileSync(this.path, JSON.stringify( productsList ), 'utf-8')
        } catch (error) {
            console.log(error)
        }
    }
}

const test = new ProductManager('./entregable2.json')

// Agrego productos
test.addProduct('teclado', 'teclado mecanico', 13000, 'http://images.com/1', 123, 5)
test.addProduct('mouse', 'mouse inalambrico', 8000, 'http://images.com/2', 124, 5)
test.addProduct('mouse', 'mouse', 6000, 'http://images.com/2', 125, 5)
test.addProduct('monitor', 'monitor', 18000, 'http://images.com/2', 126, 5)

// Retorna el arreglo de productos
// test.getProducts()

// Busco producto por id existente
// console.log( test.getProductById(4) )

// Borro un producto por id
// test.deleteProduct(2)

// Actualizo un producto por id
test.updateProduct(2, {title:'parlantes', description: 'parlantes bluetooth', price: 8000, thumbnail: 'http://images.com/2', code:124, stock: 5})
