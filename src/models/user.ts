import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    phoneNo:{
        type:String
    },
    address:{
        type:String
    },
    foodId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"foodDonation"
    },
    location:{
        lat:{type:String},
        long:{type:String}
    }
       
    
})

const USER = mongoose.model("user",userSchema)
export default USER