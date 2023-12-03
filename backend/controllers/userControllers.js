const asyncHandler = require('express-async-handler')
const User =  require('../Models/userModel');
const generateToken = require('../config/generateToken');

// for SIGNUP (registering the user)
const registerUser = async(req,res) => {
      const {name, email, password, pic} = req.body;

      console.log(req.body)

      if(!name || !email || !password ){
        res.status(400);
        throw new Error("Please fill all the details")
      }

      const userExist = await User.findOne({email})

      if(userExist){
        res.status(400)
        throw new Error("User already found");
      }

      const user = await User.create({
        name, email, password, pic,
      })


      if(user){
        res.status(201).json({
          _id: user.id,
          name:user.name,
          email:user.email,
          pic:user.pic,
          token:generateToken(user._id),
        })
      }
      else{
        res.status(400)
        throw new Error("Failed !!");

      }
}

// for LOGIN

const authUser =  asyncHandler(async (req,res) =>{


   const {email , password} = req.body;

   
   
   const user = await User.findOne({email})

   console.log(user)
   if(user  && (await User.matchPassword(password))){
    res.json({
      _id:user._id,
      name:user.name,
      email:user.email,
      pic:user.pic,
      token:generateToken(user._id)
    })
   }
   else{
    res.status(400);
        throw new Error("Invalid id & pass")
   }
})

module.exports= {registerUser,authUser }