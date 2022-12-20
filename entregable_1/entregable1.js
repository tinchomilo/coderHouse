class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct( title, description, price, thumbnail, code, stock ) {
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
                product.id = this.products[this.products.length -1].id + 1;
            } else {
                product.id = 1;
            }

            const isPresentCode = this.products.find( product => product.code === code );

            if( !isPresentCode ) {
                this.products.push( product );
                return true;
            }
            return console.log( `el code ${ code } ya esxiste` );
        }
        throw new Error( 'Todos los campos son obligatorios!!' );
    }

    getProducts() {
        return this.products
    }

    getProductById( id ) {
        const foundProduct = this.products.find( product => product.id === id)

        if( foundProduct ) return foundProduct

        console.log('Not found')
    }
}

const test = new ProductManager()

// Agrego productos
test.addProduct('teclado', 'teclado mecanico', 13000, 'http://images.com/1', 123, 5)
test.addProduct('mouse', 'mouse inalambrico', 8000, 'http://images.com/2', 124, 5)
test.addProduct('monitor', 'full hd', 20000, 'http://images.com/3', 125, 5)

// Codigo 124 duplicado
test.addProduct('auriculares', 'gamer', 3000, 'http://images.com/2', 124, 5)

// Agrego productos
test.addProduct('parlantes', 'bluetooth', 2000, 'http://images.com/4', 126, 5)
test.addProduct('silla', 'negra con ruedas', 8000, 'http://images.com/5', 127, 5)

// Busco producto por id existente
// console.log( test.getProductById(2) )

// Busco producto por id inexistente
// test.getProductById(123)

// prueba cuando falta un parametro
// test.addProduct('mouse', 'mouse inalambrico', 8000, 'http://images.com/2', 5)

// Retorna el arreglo de productos
console.log(test.getProducts())