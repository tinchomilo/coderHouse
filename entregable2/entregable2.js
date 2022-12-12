const fs = require('fs')

class ProductManager {
    constructor(path) {
        this.path = path
        this.products = []
    }
    addProduct(title, description, price, thumbnail, code, stock) {
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
    }

    getProducts() {
        return console.log( JSON.parse( fs.readFileSync(this.path, 'utf-8') ) )
    }

    getProductById( id ) {

        const productsList = JSON.parse( fs.readFileSync(this.path, 'utf-8') )

        const foundProduct = productsList.find( product => product.id === id)

        if( foundProduct ) return foundProduct

        console.log('Not found')
    }

    deleteProduct(id) {
        const productsList = JSON.parse( fs.readFileSync(this.path, 'utf-8') )

        const newProductsList = productsList.filter( product => product.id !== id)

        console.log(newProductsList)

        return fs.writeFileSync(this.path, JSON.stringify( newProductsList ), 'utf-8')
    }

    updateProduct(id, productToUpdate) {

        let productsList = JSON.parse( fs.readFileSync(this.path, 'utf-8') )

        productsList = productsList.filter( product => product.id !== id)

        productsList.push({
            ...productToUpdate,
            id
        })

        return fs.writeFileSync(this.path, JSON.stringify( productsList ), 'utf-8')

    }
}

const test = new ProductManager('./entregable2.json')
test.addProduct('teclado', 'teclado mecanico', 13000, 'http://images.com/1', 123, 5)
test.addProduct('mouse', 'mouse inalambrico', 8000, 'http://images.com/2', 124, 5)
test.addProduct('mouse', 'mouse', 6000, 'http://images.com/2', 125, 5)
test.addProduct('monitor', 'monitor', 18000, 'http://images.com/2', 126, 5)
test.getProducts()
// console.log( test.getProductById(4) )
// test.deleteProduct(2)
test.updateProduct(2, {title:'parlantes', description: 'parlantes bluetooth', price: 8000, thumbnail: 'http://images.com/2', code:124, stock: 5})
