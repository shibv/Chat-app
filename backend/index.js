const express = require('express');
const {chats} = require("./data/data");
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes= require('./routes/userRoutes')



const app = express()
dotenv.config()
connectDB()


app.get("/", (req,res) =>{
    res.send("jbekfjhuefw")
})

 app.use('/api/user',userRoutes )

const port = process.env.PORT || 4000

app.listen(port, console.log("jdjhefwjfew") )