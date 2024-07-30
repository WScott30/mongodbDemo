const express = require('express')
const logger = require('morgan')

const mongoose = require('mongoose')
const Product = require('./routes/Product/controller/model/Product')
const userRouter = require('./routes/users/controller/model/userRouter')

mongoose
.connect("mongodb://127.0.0.1:27017/mongodb-demo")
.then(()=>{
    console.log('MONGO DB CONNECTED')
}).catch((e)=>{
    console.log(e)
})

const app = express()

app.use(logger('dev'))
app.use(express.json(''))
app.use('/api/users', userRouter)