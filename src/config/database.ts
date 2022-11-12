import mongoose from "mongoose"
require('dotenv').config()

mongoose.connect("mongodb+srv://siva123:7538890089@cluster0.wllr4h0.mongodb.net/?retryWrites=true&w=majority")
.then((res)=>{
  console.log("Connected to database")
 }).catch((err)=>{
  console.log("unable to connect database" + err.message)
})

global.Promise