const express = require("express");
const router = express.Router();
const {
    loginUser,
    registerUser,
} = require("../controllers/userController")

// const {protect} = require("../middleware/authMiddleware");

//Login Users
router.post("/login",loginUser);

//Register Users
router.post("/register",registerUser);

module.exports = router;