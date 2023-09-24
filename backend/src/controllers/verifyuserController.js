require("express");
const asyncHandler = require("express-async-handler");
const User = require('../model/user');
const dotenv = require('dotenv');
dotenv.config();

const verifyUser = asyncHandler(async (req, res) => {
  try {
      
      const email_ = req.body.email;
      const verifyuser = await User.findOne({email: email_});

      if (verifyuser) {
        verifyuser.verified = true;
        
        const verifiedUser = await verifyuser.save();
        const _id = verifiedUser._id;
        const googleId = verifiedUser.googleId;
        const email = verifiedUser.email;
        const userAppKey = verifiedUser.userAppKey;
        const accessToken = verifiedUser.accessToken;
        const refreshToken = verifiedUser.refreshToken;

          res.json({
            _id: verifiedUser._id,
            googleId: verifiedUser.googleId,
            email: verifiedUser.email,
            accessToken: verifiedUser.accessToken,
            refreshToken: verifiedUser.refreshToken,
            userAppKey: verifiedUser.userAppKey
          });
        } else {
          res.status(400).json({ message: "User Not Found" });
          // throw new Error("User Not Found");
        }
  }catch (error) {
    // console.log('server error',error);
    res.status(400).json({ message: "User Not Found" });
  }
  
});


const verifyUserData = asyncHandler(async (req, res) => {
  try {
      
      const user_appkey = req.body.userappkey;

      const verifyuserdata = await User.findOne({userAppKey: user_appkey});

      if (verifyuserdata) {
        verifyuserdata.verified = true;
        
        const verifiedUser = await verifyuserdata.save();
        const _id = verifiedUser._id;
        const googleId = verifiedUser.googleId;
        const email = verifiedUser.email;
        const userAppKey = verifiedUser.userAppKey;
        const accessToken = verifiedUser.accessToken;
        const refreshToken = verifiedUser.refreshToken;

          res.json({
            _id: verifiedUser._id,
            googleId: verifiedUser.googleId,
            email: verifiedUser.email,
            accessToken: verifiedUser.accessToken,
            refreshToken: verifiedUser.refreshToken,
            userAppKey: verifiedUser.userAppKey
          });
        } else {
          res.status(400).json({ message: "User Not Found" });
        }
  }catch (error) {
    // console.log('server error',error);
    res.status(400).json({ message: "User Not Found" });
  }
  
});


module.exports = { verifyUser, verifyUserData };
