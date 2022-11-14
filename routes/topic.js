const express = require("express");
const router = express.Router();
const {
    addTopic,
    getTopic,
    updateTopic,
    deleteTopic,
    getAllTopic
} = require("../controllers/topicController")

// const {protect} = require("../middleware/authMiddleware");

//add Topic
router.post("/",addTopic);

//get Topic
router.get("/",getTopic);

//update Topic
router.put("/",updateTopic);

//delete Topic
router.delete("/",deleteTopic);

//gets all Topic
router.get("/all",getAllTopic);


module.exports = router;