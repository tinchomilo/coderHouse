import { model, Schema } from 'mongoose';

const productsCollection = 'products'

const productSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    thumbnails: {type: String, required: true},
    code: {type: Number, required: true},
    stock: {type: Number, required: true},
    status: {type: String, required: true},
    category: {type: String, required: true}
})

const productModel = model( productsCollection, productSchema);

export default productModel;