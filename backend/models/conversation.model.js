import mongoose from "mongoose";
const { Schema } = mongoose;

const conversationModel = new Schema({
    participants: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message',
        required: true
    }]
},{timestamps: true});

const Conversation = new mongoose.model("Conversation", conversationModel);
export default Conversation;
