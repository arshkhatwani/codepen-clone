const express = require("express");
const router = express.Router();
const verifyDecodeToken = require("../middlewares/verifyDecodeToken");

// Getting DB models
const userModel = require("../models/userModel");

// Check token
router.get("/checktoken", verifyDecodeToken, async(req,res) => {
  try {
    // console.log("called")
    res.status(200).json(req.headers.user);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

// Get Profile Data
router.get("/user/profile", verifyDecodeToken, async (req, res) => {
  try {
      const { uid } = req.headers.user;

      const userData = await userModel.findOne({uid: uid});

      res.status(200).json({message: "profile", user: userData });
  } catch (e) {
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
