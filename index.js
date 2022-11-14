const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors")
const bodyParser = require("body-parser")
const Routes = require("./routes")
let port = process.env.PORT || 5000
const connectDB = require("./db/connect")
const {errorHandler} = require("./middleware/errorHandler")

//db started
connectDB()

app.use(cors());
app.use(bodyParser.json());



app.use("/",Routes);


//using middleware for error handling
app.use(errorHandler)

//starting server message
app.get("/",(req,res)=>{
    res.send("Hello EduBot is live")
})


//listening to port (Start Server)
app.listen(port,()=>{
    console.log("Server Started");
})
