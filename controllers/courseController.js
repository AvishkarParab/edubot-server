const Course = require("../models/courseModel");
const asyncHandler = require("express-async-handler");

//adds a single course 
const addCourse = asyncHandler(async (req,res) =>{
    const {cname, courseImage, topicIds} = req.body;

    if(!cname){
        res.status(400)
        throw new Error("Please enter a course name");
    }
    if(!Array.isArray(topicIds)){
        res.status(400)
        throw new Error("topicIds should be of array type");
    }
    const course = await Course.create({
        cname,
        topicIds,
        courseImage
    })
    if(course){
        res.status(201).json({
            _id:course.id,
            cname:course.name,
            courseImage:course.courseImage,
            topicIds:course.topicIds

        })
    }else{
        res.status(400)
        throw new Error("Course Not added")
    }
})

//gets a particular course based on course id
const getCourse = asyncHandler(async (req,res) =>{
    const {cid} = req.query;

    if(!cid){
        res.status(400)
        throw new Error("Please provide a course id");
    }
    const course = await Course.findById({_id:cid})
    if(course){
        res.status(201).json({
            _id:course.id,
            cname:course.cname,
            courseImage:course.courseImage,
            topicIds:course.topicIds
        })
    }else{
        res.status(400)
        throw new Error("Course Not Found")
    }
})

//updates a particular course based on course id
const updateCourse = asyncHandler(async (req,res) =>{
    const {cid,cname, courseImage, topicIds} = req.body;


    if(!cid){
        res.status(400)
        throw new Error("Please provide a course id");
    }
    
    if(!Array.isArray(topicIds)){
        res.status(400)
        throw new Error("topicIds should be of array type");
    }

    const course = await Course.findOneAndUpdate(
        {
            _id:cid
            
        },
        {
            cname,
            topicIds,
            courseImage

        }
        
    )
    if(course){
        res.status(201).json({
           message:"Course Updated successfuly"
        })
    }else{
        res.status(400)
        throw new Error("Course Not Found")
    }
})

//deletes a particular course based on course id
const deleteCourse = asyncHandler(async (req,res) =>{
    const {cid} = req.query;


    if(!cid){
        res.status(400)
        throw new Error("Please provide a course id");
    }
    

    const course = await Course.deleteOne(
        {
            _id:cid
        }
    )
    if(course){
        res.status(201).json({
           message:"Course Deleted successfuly"
        })
    }else{
        res.status(400)
        throw new Error("Course was not deleted")
    }
})

//gets list of all courses
const getAllCourses = asyncHandler(async (req,res) =>{

    const course = await Course.find()

    if(course){
        res.status(201).json({
           courses:course
        })
    }else{
        res.status(400)
        throw new Error("No Courses Available")
    }
})



module.exports ={
    addCourse,
    getCourse,
    updateCourse,
    deleteCourse,
    getAllCourses
}