const express = require('express');
const {chats} = require("./data/data");
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes= require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');



const app = express()
dotenv.config()
connectDB()
app.use(express.json())

app.get("/", (req,res) =>{
    res.send("jbekfjhuefw")
})

// routes for login and signup
app.use('/api/user',userRoutes )

// middilerware for handling errors

app.use(notFound)
app.use(errorHandler)


const port = process.env.PORT || 4000

app.listen(port, console.log("jdjhefwjfew") )