const rideModel = require("../models/rideModel");
const mapService = require("./mapsServices");
const crypto = require('crypto')


async function getFare(pickup, destination, vehicleType = "auto") {
  if (!pickup || !destination) {
    throw new Error("Pickup and destination are required");
  }

  const { distanceInKm } = await mapService.getDistanceTime(
    pickup,
    destination
  );

  let fare = 0;

  switch (vehicleType.toLowerCase()) {
    case "auto":
      fare = 20 + 10 * distanceInKm;
      break;
    case "bike":
      fare = 15 + 8 * distanceInKm;
      break;
    case "car":
      fare = 30 + 15 * distanceInKm;
      break;
    default:
      throw new Error("Invalid vehicle type");
  }

  return {
    distance: distanceInKm,
    fare: Math.round(fare),
  };
}
module.exports.getFare = getFare

function getOtp(num){
    function generateOtp(num){
        const otp = crypto.randomInt(Math.pow(10,num-1),Math.pow(10,num)).toString();
        return otp
    }
}

module.exports.createRide = async ({ pickup, destination, userId, vehicleType }) => {
    if (!pickup || !destination || !userId || !vehicleType) {
        throw new Error("All ride details are required.");
    }

    const fare = await getFare(pickup, destination);

    const ride = await rideModel.create({
        userId,
        pickup,
        destination,
        otp: getOtp(6),
        fare: fare[ vehicleType] ,
    });

    return ride;
};

module.exports.confirmRide = async({
  rideId,captain
}) => {
  if(!rideId){
    throw new Error('Ride id is required')
  }

  await rideModel.findOneAndUpdate({
    _id: rideId
  },{
    status: 'accepted',
    captain: captain._id
  })

  const ride = await rideModel.findOne({
    _id:rideId
  }).populate('user').populate('captain').select('+otp');
  if(!ride){
    throw new Error('Ride not found')
  }
 
  return ride
}

