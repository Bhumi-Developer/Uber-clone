const dotenv = require("dotenv")
dotenv.config()
const cookieParser = require('cookie-parser');

const express = require('express')
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());

const {connectDb} = require('./config/db')
const userRouter = require("./routes/userRoutes")
const captainRouter = require('./routes/capatainRoutes')
// const mapRoutes = require('./routes/mapRoutes')
connectDb()


app.use("/users",userRouter)
app.use('/captains',captainRouter)
// app.use('/maps',mapRoutes)

module.exports = app