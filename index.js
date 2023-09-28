const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('hello ci/cd pipeline')
})

app.get('/home',(req,res)=>{
    res.send('hello home')
})
app.listen(9000,()=>{
    console.log('listening to the server')
})