const express = require('express');
const {chats} = require("./data/data");
const dotenv = require('dotenv');



const app = express()
dotenv.config()

app.get("/", (req,res) =>{
    res.send("jbekfjhuefw")
})

// all chats 
app.get("/api/chat", (req,res) =>{
   
    res.send(chats)
})

// for single chat
app.get("/api/chat/:id", (req,res)=>{
    const singleChat = chats.find(c=>c._id === req.params.id)
    res.send(singleChat)
    //console.log(req.params.id)
})

const port = process.env.PORT || 4000

app.listen(port, console.log("jdjhefwjfew") )