import { Router } from "express";
import FOODDONATION from "../models/foodDonation";

import USER from "../models/user";
import ErrorHandler from "../config/errorHandler"
const router = Router()

router.get('/',async (req,res)=>{
    try{
       let totalFoodDonation = await FOODDONATION.countDocuments({})
      
       let totalUser = await USER.countDocuments({})
       if((totalFoodDonation ||  totalUser)){
          res.status(200).json({
            totalFoodDonation,
            totalUser
          })
       }else{
        throw ErrorHandler.BadRequest
       }
    }catch(err){
        console.log(err)
    }
})

export default router