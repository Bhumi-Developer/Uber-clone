const dotenv = require("dotenv")
dotenv.config()
const express = require('express')
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const {connectDb} = require('./config/db')
const userRouter = require("./routes/userRoutes")
connectDb()


app.use("/users",userRouter)

module.exports = app