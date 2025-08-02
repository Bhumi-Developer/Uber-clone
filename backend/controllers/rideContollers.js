const rideServices = require('../services/rideServices')
const {validationResult} = require('express-validator')

module.exports.createRide = async(req,res)=>{
     const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }

        const {userId,pickup,destination,vehicleType}= req.body;

        try {
            const ride = await rideServices.createRide({user: req.user._id,pickup,destination,vehicleType})
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
}