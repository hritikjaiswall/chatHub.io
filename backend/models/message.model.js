import mongoose from 'mongoose';
const { Schema } = mongoose;

const messageModel = new mongoose.Schema({
senderId:{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
},
recieverId:{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
},
message:{
    type: String,
    required: true 
}

},{timestamps: true})

const Message = new mongoose.model('Message', messageModel);
export default Message;