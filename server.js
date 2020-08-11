const express = require ('express')
const path = require('path')
const { static } = require('express')
const app = express ()


app.use(express-static(__dirname+'/dist/angular-firebase'))

app.get('/*',(req,res)=>{
  res.sendFile(path.join(__dirname+'/dist/angular-firebase/index.html'))
})

app.listen(process.env.PORT||3000)