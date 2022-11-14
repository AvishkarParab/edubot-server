const express = require("express");
const router = express.Router();
const {
    addCourse,
    getCourse,
    updateCourse,
    deleteCourse,
    getAllCourses
} = require("../controllers/courseController")

// const {protect} = require("../middleware/authMiddleware");

//add Course
router.post("/",addCourse);

//get Course
router.get("/",getCourse);

//update Course
router.put("/",updateCourse);

//delete Course
router.delete("/",deleteCourse);

//gets all courses
router.get("/all",getAllCourses);


module.exports = router;