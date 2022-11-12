import express from "express"
import {ErrorRequestHandler} from "express"
import createHttpError from "http-errors"
import bodyParser from "body-parser"
import cors from "cors"


import user from "./routes/users"
import foodDonation from "../src/routes/foodDonation"
import stats from './routes/stats'
// import auth from './routes/auth'

const app = express()
require('./config/database')

app.use(cors());

// //body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))


app.use('/users',user)
app.use('/food',foodDonation)
app.use('/stat',stats)
// app.use('/auth',auth)

// app.get('/',(req,res)=>{
//     res.json('hello')
// })

app.use(()=>{
    throw createHttpError(404,"not found")
})

// //error handler
const errorHandler:ErrorRequestHandler=(err,req,res,next)=>{
    console.log(err.message,err.statuscode);
    if(res.headersSent){
        return next(err)
    }
    res.status(err.statuscode || 500)
    .json({message:err.message || "An unknow Error"})
}
app.use(errorHandler)



//port
app.listen(4000,()=>{
    console.log(`listening port on 4000`)
})