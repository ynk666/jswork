//const http=require('http')
const express = require('express')
const { response } = require('express')
const app=express()

const port = 8080
app.get('/',(req,res)=>{
    res.send('hello from express.')
})
app.listen(port,()=>console.log(`express server running on port:${port}`))
