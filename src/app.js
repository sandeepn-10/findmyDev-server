const express = require("express");
const app = express();


const authentation = (req,res,next)=>{
    console.log("authentation called")
    next()
}

const fileHandler = (req,res,next)=>{
    console.log("fileHandler called")
    next()
}

app.get("/user",authentation,fileHandler,(req,res)=>{
    console.log("user details")
    res.send("users...")
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
