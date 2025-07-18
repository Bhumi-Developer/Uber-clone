const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")
const captainModel = require("../models/captainModel")
const blacklistTokenModel = require("../models/blacklistTokenModel")

module.exports.authUser = async(req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split('')[1]
    if(!token){
       return res.status(401).json({message: "Unauthorized"})
    }
    const isBlacklisted = await blacklistTokenModel.findOne({token:token})
    if(isBlacklisted){
        return res.status(401).json({message: 'Unauthorized'})
    }
    try {
        const decorded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await userModel.findById(decorded._id)
        req.user = user
       return next()
    } catch (error) {
        return res.status(401).json({message : `${error}`})
    }
}

module.exports.authCaptain = async(req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split('')[1]
    if(!token){
       return res.status(401).json({message: "Unauthorized"})
    }
    const isBlacklisted = await blacklistTokenModel.findOne({token:token})
    if(isBlacklisted){
        return res.status(401).json({message: 'Unauthorized'})
    }
    try {
        const decorded = jwt.verify(token,process.env.JWT_SECRET)
        const captain = await captainModel.findById(decorded._id)
        req.captain = captain
       return next()
    } catch (error) {
        return res.status(401).json({message : `${error}`})
    }
}