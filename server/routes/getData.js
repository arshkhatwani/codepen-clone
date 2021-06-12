const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const secretKey = require("../config").secretKey;
const verifyJwtToken = require("../middlewares/verifyToken");

// Getting DB models
const userModel = require("../models/userModel");

// Get Profile Data
router.get("/user/profile", verifyJwtToken, async (req, res) => {
  try {
      const token = req.token;
      const data = jwt.verify(token, secretKey, (err, token) => {
          if(err){
              return "Forbidden";
          }
          else{
              return token;
          }
      });
      if(data == "Forbidden"){
        return res.status(403).send("Forbidden");
      }
      return res.status(200).json({message: "profile", user: data.user });
  } catch (e) {
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
