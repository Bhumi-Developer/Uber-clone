const captainModel = require('../models/captainModel')
const captainServices = require('../services/captainServices')
const {validationResult} = require('express-validator')
// const blacklistTokenModel = require('../models/blacklistTokenModel')


module.exports.registerCaptain = async(req,res)=>{
    const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
    const {fullname,email,password,vehicle} = req.body
    const alreadyExists = await captainModel.findOne({email})
    if(alreadyExists){
        return res.status(401).json({message: 'Already Exists'})
    }

    const hashedPassword = await captainModel.hashPassword(password)

    const captain = await captainServices.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color:vehicle.color,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType,  
    })

    const token = captain.generateAuthToken()
    res.status(201).json({token,captain})
}

module.exports.loginCaptain = async(req,res)=>{
    const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
    const {email,password} = req.body

    const captain = await captainModel.findOne({email}).select('+password')
    if(!captain){
        return res.status(401).json({message: "Invalid email or password"})
    }

    const isMatch = await captain.comparePassword(password)
    if(!isMatch){
        return res.status(401).json({message: "Invalid email or password"})
    }
    const token = captain.generateAuthToken()
    res.cookie('token',token)
    res.status(200).json({token,captain})
}

module.exports.getCaptainProfile = async(req,res)=>{
    res.status(200).json(req.captain)
}

module.exports.logoutCaptain = async(req,res)=>{
    res.clearCookie('token')
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]
    // await blacklistTokenModel.create({token})
    res.status(200).json({message: 'LoggedOut Captain'})
}