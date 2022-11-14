const mongoose = require("mongoose");

const courseEnrolSchema = mongoose.Schema({
    cid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Course"
    },
    studId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    startDate:{
        type:String
    },
    endDate:{
        type:String,
        default:null
    },
    progress:{
        type:Number,
        default:0
    }

})

module.exports = mongoose.model('CourseEnrol',courseEnrolSchema);