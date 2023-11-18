const { default: mongoose } = require('mongoose')
const moongose = require('mongoose')


const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongo db connected`)

    }
    catch(error){
          console.log(error.message)
    }
}

module.exports = connectDB