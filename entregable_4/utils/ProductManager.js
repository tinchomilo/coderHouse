import fs from 'fs'
import { threadId } from 'worker_threads'

class ProductManager {
    constructor(path) {
        this.path = path
        try {
            this.products = JSON.parse( fs.readFileSync(this.path, 'utf-8') ) 
        } catch (error) {
            this.products = []
        }
    }

    addProduct(title, description, price, thumbnails, code, stock, status = true, category) {

            if( title && description && price && code && stock && status && category ) {
                const product = {
                    title,
                    description,
                    price,
                    thumbnails,
                    code,
                    stock,
                    status,
                    category
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
                    return product;
                }
                throw new Error( `el code ${ code } ya esxiste` );
            }
            throw new Error( 'Todos los campos son obligatorios!!' );
    }

    getProducts() {
        try {
            return JSON.parse( fs.readFileSync(this.path, 'utf-8') )
        } catch (error) {
            console.log(error)
        }
    }

    getProductById( id ) {

        const foundProduct = this.products.find( product => product.id === id)

        if( foundProduct ) return foundProduct

        throw new Error(' Not found ')
    }

    deleteProduct(id) {

        const isExistProduct = this.products.some( (elem) => elem.id === id)
        if( isExistProduct ) {
            const newProductsList = this.products.filter( product => product.id !== id)

            fs.writeFileSync(this.path, JSON.stringify( newProductsList ), 'utf-8')

            return true
        }

        throw new Error( 'No existe un elemento con ese id' )
    }

    updateProduct(id, productToUpdate) {

        let productsList = this.products.find( product => product.id === id)

        if( productsList ){

            productsList = this.products.filter( product => product.id !== id)

            productsList.push({
                ...productToUpdate,
                id
            })

            return fs.writeFileSync(this.path, JSON.stringify( productsList ), 'utf-8')
        }

        throw new Error( 'Producto inexistente' )
    }
}

// const test = new ProductManager('./entregable2.json')

// Agrego productos
// test.addProduct('teclado', 'teclado mecanico', 13000, 'http://images.com/1', 123, 5)
// test.addProduct('mouse', 'mouse inalambrico', 8000, 'http://images.com/2', 124, 5)
// test.addProduct('mouse', 'mouse', 6000, 'http://images.com/2', 125, 5)
// test.addProduct('monitor', 'monitor hd', 18000, 'http://images.com/2', 126, 5)
// test.addProduct('parlantes', 'parlantes bluetooth', 4500, 'http://images.com/2', 127, 5)
// test.addProduct('impresora', 'impresora laser', 68000, 'http://images.com/2', 128, 5)

// Retorna el arreglo de productos
// test.getProducts()

// Busco producto por id existente
// console.log( test.getProductById(4) )

// Borro un producto por id
// test.deleteProduct(2)

// Actualizo un producto por id
// test.updateProduct(2, {title:'parlantes', description: 'parlantes bluetooth', price: 8000, thumbnail: 'http://images.com/2', code:124, stock: 5})

export default new ProductManager('./products.json')