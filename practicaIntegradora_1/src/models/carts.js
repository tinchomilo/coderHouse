import { model, Schema } from 'mongoose';

const cartCollection = 'carts';

const cartSchema = new Schema({
    name: {type: String, required: true},
    lastName: String,
    age: Number,
    email: String
});

const cartModel = model(cartCollection, cartSchema);

export default cartModel;