const express = require("express")
const app = express()
require("dotenv").config()
let port = process.env.PORT || 5000

app.get("/",(req,res)=>{
    res.send("Hello EduBot is live")
})

app.listen(port,()=>{
    console.log("Server Started");
})
