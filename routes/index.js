const express = require("express");
const router = express.Router();
const users = require("./users");
const courses = require("./course");
const topics = require("./topic");



router.use("/user",users)

router.use("/course",courses)

router.use("/topic",topics)






module.exports = router;