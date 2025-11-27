const express = require('express')
const app = express()

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})

//request handlers
app.use('/test',(req,res)=>{
    res.send('Hello World test')
})

app.use('/',(req,res)=>{
    res.send('Hello World')
})