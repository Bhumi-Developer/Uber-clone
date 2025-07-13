const mongoose = require("mongoose")


module.exports.connectDb = async ()=>{
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log("db connected")
    } catch (error) {
        console.log("db error")
    }
}
