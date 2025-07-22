const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")
const captainModel = require("../models/captainModel")
const blacklistTokenModel = require("../models/blacklistTokenModel")

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  
    const isBlacklisted = await blacklistTokenModel.findOne({ token });
    if (isBlacklisted) {
      return res.status(401).json({ message: 'Unauthorized (blacklisted token)' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded.role !== 'user') {
        return res.status(403).json({ message: "Forbidden: Not a user" });
      }
  
      const user = await userModel.findById(decoded._id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      req.user = user;
      next();
    } catch (error) {
      return res.status(401).json({ message: `${error}` });
    }
  };
  
  module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  
    const isBlacklisted = await blacklistTokenModel.findOne({ token });
    if (isBlacklisted) {
      return res.status(401).json({ message: 'Unauthorized (blacklisted token)' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded.role !== 'captain') {
        return res.status(403).json({ message: "Forbidden: Not a captain" });
      }
  
      const captain = await captainModel.findById(decoded._id);
      if (!captain) {
        return res.status(404).json({ message: 'Captain not found' });
      }
  
      req.captain = captain;
      next();
    } catch (error) {
      return res.status(401).json({ message: `${error}` });
    }
  };
  