// chatName, isGroupchat, users, latestMessage, groupAdmin

const mongoose  = require('mongoose')

const chatModel = mongoose.Schema(

    {
        chatName: {
            type: String, trim:True
        },
        isGroupchat: {type: Boolean, default:false},
        users : [{
             type:mongoose.Schema.Types.ObjectId,
             ref:"User"

        }],
        latestMessage: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message"
        },
        groupAdmin:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }

    },
    {
        timestamps:True,
    }
)

const Chat = mongoose.model("Chat",chatModel )

module.exports = Chat;