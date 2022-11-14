const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    cname:{
        type:String,
        required:true,
    },
    topicIds:{
        type:Array
    },
    courseImage:{
        type:String,
    },
    cDesp:{
        type:String
    }

})

module.exports = mongoose.model('Course',courseSchema);