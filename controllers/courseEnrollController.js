const Course = require("../models/courseModel");
const Student = require("../models/userModel");
const CourseEnrol = require("../models/courseEnrollments");

const asyncHandler = require("express-async-handler");


//enroll student in a course
const enroll = asyncHandler(async (req,res) =>{
    const {cid,studId} = req.body;

    if(!cid || !studId){
        res.status(400)
        throw new Error("Incomplete data please provide course id and student id");
    }
    //finding valid course is available
    const course = await Course.findById(cid)
    if(!course.id){
        res.status(400)
        throw new Error("Course Not Found");
    }

    //finding student course is available
    const student = await Student.findById(studId)
    if(!student.id){
        res.status(400)
        throw new Error("Student Not Found");
    }

    //assigning course to student
    const enroll = await CourseEnrol.create({
        cid,
        studId,
        startDate:Date.now(),
        progress:0
    })
    if(enroll){
        res.status(201).json({
            enroll
        })
    }else{
        res.status(400)
        throw new Error("Student Not Found");
    }
    
})



module.exports ={
    enroll,
}