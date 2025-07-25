const mongoose = require('mongoose')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required: true,
            minlength: [3,"First name must contain at least three characters or more"]
        },
        lastname:{
            type:String,
            minlength: [3,"Last name must contain at least three characters or more"]
        }},
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            minlength: [5,"Email must contain at least five characters long"]
        },
        password:{
            type: String,
            required: true,
            select: false
        },
        socketId:{
            type: String
        },
        status:{
            type:String,
            enum: ['active','inactive'],
            default: 'active'
        },
        vehicle:{
            color:{
                type:String,
                required: true,
                minlength: [3,"Color must contain at least three character"]
            },
            plate:{
                type:String,
                required: true,
                minlength: [3,"Plate must contain at least three character"]
            },
            capacity:{
                type:Number,
                required: true,
                minlength: [1,"Capacity must contain at least one character"]
            },
            vehicleType:{
                type:String,
                required: true,
                enum:['car','auto','bike']
            }
        },
        location:{
            lat:{
                type:Number
            },
            lng:{
                type:Number
            }
        }
})

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id,role: "captain"},process.env.JWT_SECRET,{expiresIn : '24h'})
    return token
}

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10)
}

const captainModel = mongoose.model("Captain",captainSchema)
module.exports = captainModel