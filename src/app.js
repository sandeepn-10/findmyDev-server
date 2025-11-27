const express = require('express')
const app = express()

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})

//request handlers
app.get('/test',(req,res)=>{
    res.send('Hello World test')
})

app.post('/test',(req,res)=>{
    res.send('post test')
})

app.delete('/test',(req,res)=>{
    res.send('delete test')
})

app.patch('/test',(req,res)=>{
    res.send('patch test')
})

app.use('/',(req,res)=>{
    res.send('Hello World')
})