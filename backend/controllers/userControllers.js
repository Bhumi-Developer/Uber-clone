const blacklistTokenModel = require("../models/blacklistTokenModel")
const userModel = require("../models/userModel")
const userServices = require("../services/userServices")
const { validationResult } = require("express-validator")
const captainModel = require('../models/captainModel')

module.exports.registerUser = async(req,res) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const {fullname,email,password} = req.body
    const alreadyExists = await userModel.findOne({email})
    if(alreadyExists){
        return res.status(401).json({message: 'Already Exists'})
    }

    const hashedPassword = await userModel.hashPassword(password)

    const user = await userServices.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    })

    const token = user.generateAuthToken()
    return res.status(201).json({token,user})
}

module.exports.loginUser = async(req,res) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {email,password} = req.body
    const user = await userModel.findOne({email}).select('+password')

    if(!user){
       return res.status(401).json({message: 'Invalid email or password'})
    }
    const isMatch = await user.comparePassword(password)
    if(!isMatch){
      return res.status(401).json({message: 'Invalid email or password'})
    }
    const token = user.generateAuthToken()
    res.cookie('token',token)
     return res.status(201).json({token,user})
}

module.exports.getUserProfile = async(req,res)=>{
    res.status(200).json(req.user)
}

module.exports.logoutUser = async(req,res)=>{
    res.clearCookie('token')
    const token = req.cookies.token || req.headers.authorization?.split('')[1]
    await blacklistTokenModel.create({token})
    res.status(200).json({message: 'LoggedOut User'})
}