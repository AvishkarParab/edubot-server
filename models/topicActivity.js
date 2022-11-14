const mongoose = require("mongoose");

const topicActivitySchema = mongoose.Schema({
    cid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Course"
    },
    tid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Topic"
    },
    studId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    wrongattempt:{
        type:Number
    },
    startDate:{
        type:Date
    },
    completedDate:{
        type:Date
    },
    progress:{
        type:String
    }

})

module.exports = mongoose.model('TopicActivity',topicActivitySchema);