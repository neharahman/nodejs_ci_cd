const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('hello ci/cd pipeline changes code')
})

app.get('/home',(req,res)=>{
    res.send('hello home')
})
app.get('/cicd',(req,res)=>{
    res.send('hello ci cd auto deployed successfully hi')
})

app.listen(9000,()=>{
    console.log('listening to the server')
})
