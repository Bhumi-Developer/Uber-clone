const express = require('express')
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware')
const rideController = require('../controllers.rideControllers')

router.get('/create',
    authMiddleware.authUser,
    body('pickup').isString().isLength({min:3}).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({min:3}).withMessage('Invalid destination address'),
    body('vehicleType').isString().isIn(['auto','car','bike']).withMessage('Invalid vehicle type'),
    rideController.createRide
)


module.exports = router;