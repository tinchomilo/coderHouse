import productModel from "../models/products.js";
import userModel from "../models/carts.js"

userModel

class ProductDao {


    async createUser( data ) {
        return await userModel.create(data)
    }

    async getUsers() {
        return await userModel.find();
    }

    async createProduct( data ) {
        return await productModel.create( data )
    }

}

export default new ProductDao();
