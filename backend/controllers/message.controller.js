import { asyncHandler } from "../utils/asyncHandler.js";
import Conversation from "../models/conversation.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import messageModel from "../models/message.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

const sendMessage = asyncHandler(async (req, res) => {
    const senderId = req.id;
    const recieverId = req.params.id;
    const { message } = req.body;
    let gotConversation = await Conversation.findOne({
        participants: { $all: [senderId, recieverId] }
    })

    if (!gotConversation) {
        gotConversation = await Conversation.create({
            participants: [senderId, recieverId]
        })
    }

    const newMessage = await Message.create({
        senderId,
        recieverId,
        message
    })
    if (newMessage) {
        gotConversation.messages.push(newMessage._id);
        await gotConversation.save();
        await newMessage.save()
        await Promise.all([
            gotConversation.save(),
            newMessage.save()
        ]);

    } else {
        throw new ApiError(500, "Error sending message");
    }
    const receiverSocketId = getReceiverSocketId(recieverId);  // spelling fixed: recieverId => receiverId
    if (receiverSocketId) {
        io.to(receiverSocketId).emit("newMessage", newMessage);
    }
    console.log(newMessage)
    return res.status(200).json(new ApiResponse(200, "Message sent successfully", {
        conversationId: gotConversation._id,
        message: newMessage
    }));
})
const getMessage = asyncHandler(async (req, res) => {
    const recieverId = req.params.id;
    const senderId = req.id;
    const conversation = await Conversation.findOne({
        participants: { $all: [senderId, recieverId] }
    }).populate("messages");
    console.log(conversation.messages);
    return res.status(200).json(conversation?.messages);
});

export { sendMessage, getMessage };