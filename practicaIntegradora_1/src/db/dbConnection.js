import mongoose from 'mongoose';

const databaseName = 'ecommerce'

export const dbConnection = () => {

    mongoose.set('strictQuery', true);
    mongoose.connect(`mongodb+srv://tinchoMilo:tinchoMilo123@cluster0.v29vptl.mongodb.net/${databaseName}?retryWrites=true&w=majority`, ( error ) => {
        error
            ? console.log(error)
            : console.log(`Connected to db ${databaseName} on Mongo Atlas`)
    })
}
