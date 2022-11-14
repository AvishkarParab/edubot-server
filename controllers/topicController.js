const Topic = require("../models/topicModel");
const asyncHandler = require("express-async-handler");


//adds a single topic 
const addTopic = asyncHandler(async (req,res) =>{
    const {tname, topicImage, tDesp, content} = req.body;

    if(!tname){
        res.status(400)
        throw new Error("Please enter a topic name");
    }
    if(!Array.isArray(content)){
        res.status(400)
        throw new Error("content should be of array type");
    }
    if(content.length < 1){
        res.status(400)
        throw new Error("content cannot be empty ");
    }
    if(!Array.isArray(content.options)){
        res.status(400)
        throw new Error("options should be of an array type");
    }
    const topic = await Topic.create({
        tname,
        topicImage,
        tDesp,
        content
    })
    if(topic){
        res.status(201).json({
            _id:topic.id,
            tname:topic.tname,
            topicImage:topic.topicImage,
            content:topic.content

        })
    }else{
        res.status(400)
        throw new Error("Course Not added")
    }
})

//gets a particular topic based on topic id
const getTopic = asyncHandler(async (req,res) =>{
    const {tid} = req.query;

    if(!tid){
        res.status(400)
        throw new Error("Please provide a topic id");
    }
    const topic = await Topic.findById({_id:tid})
    if(topic){
        res.status(201).json({
            _id:topic.id,
            tname:topic.tname,
            topicImage:topic.topicImage,
            content:topic.content
        })
    }else{
        res.status(400)
        throw new Error("Topic Not Found")
    }
})

//update a particular topic based on topic id
const updateTopic = asyncHandler(async (req,res) =>{
    const {tid,tname, topicImage, tDesp, content} = req.body;

    if(!tid){
        res.status(400)
        throw new Error("Please provide a topic id");
    }
    
    if(!Array.isArray(content)){
        res.status(400)
        throw new Error("content should be of an array type");
    }
    if(content.length < 1){
        res.status(400)
        throw new Error("content cannot be empty ");
    }
    content.forEach(ele => {
        if(!Array.isArray(ele.options)){
            console.log(typeof(ele.options));
            res.status(400)
            throw new Error("options should be of an array type");
        }
    });
    
    const topic = await Topic.findOneAndUpdate(
        {
            _id:tid
            
        },
        {
            tname,
            topicImage,
            tDesp,
            content

        }
        
    )
    if(topic){
        res.status(201).json({
           message:"Topic Updated successfuly"
        })
    }else{
        res.status(400)
        throw new Error("Topic Not Found")
    }
})

//deletes a particular topic based on topic id
const deleteTopic = asyncHandler(async (req,res) =>{
    const {tid} = req.query;


    if(!tid){
        res.status(400)
        throw new Error("Please provide a course id");
    }
    

    const topic = await Topic.deleteOne(
        {
            _id:tid
        }
    )

    if(topic.deletedCount > 0){
        res.status(201).json({
            topic,
           message:"Topic Deleted successfuly"
        })
    }else{
        res.status(400)
        throw new Error("Topic was not deleted")
    }
})

//gets all topics 
const getAllTopic = asyncHandler(async (req,res) =>{
    
    const topic = await Topic.find()
    if(topic){
        res.status(201).json({
            topics:topic
        })
    }else{
        res.status(400)
        throw new Error("Topics Not Available")
    }
})

module.exports ={
    addTopic,
    getTopic,
    updateTopic,
    deleteTopic,
    getAllTopic,
}