const mongoose = require("mongoose");

const topicSchema = mongoose.Schema({
    tname:{
        type:String,
        required:true,
    },
    topicImage:{
        type:String,
    },
    tDesp:{
        type:String
    },
    content:[
        {
            contType:{
                type:String,
                // required:true
            },
            imageLink:{
                type:String,
            },
            videoLink:{
                type:String,
            },
            question:{
                type:String,
                // required:true
            },
            options:[
                {
                    text:{
                        type:String
                    },
                    correct:{
                        type:Boolean
                    }
                }
            ]
        }
    ]

})

module.exports = mongoose.model('Topic',topicSchema);