
import mongoose from "mongoose";

const foodDonationSchema = new mongoose.Schema({
    foodName:{
        type:String
    },
   quantity:{
        type:Number
    },
   city:{
        type:String
    },
    required:{
     type:Boolean
    },
   
    location:{
        lat:{type:String},
        long:{type:String}
    },
   createdAt: {
        type: Date,
        default: new Date(),
      },
      updatedAt: {
        type: Date,
        default: new Date(),
      },
   })

const FOODDONATION = mongoose.model("foodDonation",foodDonationSchema)
export default FOODDONATION