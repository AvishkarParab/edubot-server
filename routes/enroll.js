const express = require("express");
const router = express.Router();
const {
    enroll
} = require("../controllers/courseEnrollController")

// const {protect} = require("../middleware/authMiddleware");

//enroll a course to student
router.post("/",enroll);

// //get Course
// router.get("/",getCourse);

// //update Course
// router.put("/",updateCourse);

// //delete Course
// router.delete("/",deleteCourse);

// //gets all courses
// router.get("/all",getAllCourses);


module.exports = router;