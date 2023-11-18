const mongoose  = require('mongoose')

const userSchema = mongoose.Schema({
     name:{
        type:String,
        require:true
     },
     email:{
        type:String, require:true
     },
     password: {
        type:String, require:true
     },
     pic: {
        type:String, require:true, default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
     }
},
{
    timestamps:True,
}
)


const User = mongoose.model("Message", userSchema);

module.exports = User;