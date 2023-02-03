import { model, Schema } from 'mongoose';

const messagesCollection = 'messages';

const messageSchema = new Schema({

})

const messageModel = model(messagesCollection, messageSchema);

export default messageModel;