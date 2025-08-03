const express = require('express')
const router = express.Router();
const { body,query} = require('express-validator');
const authMiddleware = require('../middlewares/authMiddleware')
const rideController = require('../controllers/rideContollers')

router.post('/create',
    authMiddleware.authUser,
    body('pickup').isString().isLength({min:3}).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({min:3}).withMessage('Invalid destination address'),
    body('vehicleType').isString().isIn(['auto','car','bike']).withMessage('Invalid vehicle type'),
    rideController.createRide
)

router.get('/get-fare',
    authMiddleware.authUser,
    query('pickup').isString().isLength({ min: 3 }).withMessage('Invalid Pickup Location'),
    query('destination').isString().isLength({ min: 3 }).withMessage('Invalid Destination Location'),    
    rideController.getFare
)

router.post('/confirm',
    authMiddleware.authCaptain,
    body('rideId').isMongoId().withMessage('Invalid Ride id'),
    rideController.confirmRide
)
router.get('/start-ride',
    authMiddleware.authCaptain,
    body('rideId').isMongoId().withMessage('Invalid Ride id'),
    query('otp').isString().isLength({min:6,max:6}).withMessage('Invalid otp'),
    rideController.startRide
)


router.post('end-ride',
    authMiddleware.authCaptain,
    body('rideId').isMongoId().withMessage('Invalid ride Id'),
    rideController.endRide
)

module.exports = router;