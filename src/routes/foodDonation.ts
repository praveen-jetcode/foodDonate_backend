import { getDistance } from 'geolib';
import { Router } from "express";
import FOODDONATION from "../models/foodDonation";
import ErrorHandler from "../config/errorHandler";
import { foodValidation,validationFood } from "../middleweres/validation/foodDonation";



const router = Router()



router.post('/',foodValidation,validationFood,async (req:any,res:any)=>{
    try{
       
     let data = new FOODDONATION({
        foodName:req.body.foodName,
        quantity:req.body.quantity,
        city:req.body.city,
        required:req.body.required,
       location:req.body.location
     })
   if(data){
         await data.save()
         res.status(200).json(data)
     }else{
         throw ErrorHandler.NotFound
     }
    }catch(err:any){
     
     res.status(500).json({msg:err.message})
 
    }
 })


 
 router.get('/',async (req,res)=>{
    const { page = 1, limit = 10 }:any = req.query;
   
     try{
     let data = await FOODDONATION.find()
     .limit(limit * 1)
     .skip((page - 1) * limit)
     .exec();
     let totalCount = await FOODDONATION.countDocuments()
     if(data){
         res.status(200).json({data,
            totalPages: Math.ceil(totalCount / limit),
            currentPage: page,
            Total:totalCount
        })
     }else{
         throw ErrorHandler.BadRequest
     }
     }catch(err:any){
   
      res.status(500).json({msg:err.message})
     }
 })

 router.get('/distance',async(req:any,res:any)=>{
    const latitude = req.body.location.lat
    const longitude = req.body.location.long
    try{
    const distance = getDistance(
        { latitude,longitude},
        { latitude: 11.9416, longitude: 79.8083 }
       
    )
    if(distance){
        res.status(200).json(distance/1000)
    }else{
        throw ErrorHandler.BadRequest
    }
   
    }catch(err){
        res.status(500).json(err)
    } 
 })
 
 router.get('/:id',async (req,res)=>{
    try{
     let id = req.params.id
     
     if (!id) {
        return res.status(400).json({
          message: "invalid id",
        });
      }
     let data = await FOODDONATION.findById(id)
     if(data){
         res.status(200).json(data)
     }else{
         throw ErrorHandler.InternalServerError
     }
     }catch(err:any){
      
      res.status(500).json({msg:err.message})
     }
 })
 
 router.put('/:id',async (req,res)=>{
     let id = req.params.id
     let body = req.body
     try{
         let data = await FOODDONATION.findByIdAndUpdate(id,body, {new:true})
         if(data){
             res.status(200).json(data)
         }else{
             throw ErrorHandler.BadRequest
         }
     }catch(err:any){
        
         res.status(500).json({msg:err.message})
     }
 })
 
 router.delete('/:id',async (req,res)=>{
     let id = req.params.id
     let body = req.body
     try{
         let data = await FOODDONATION.findByIdAndDelete(id,body)
         if(data){
             res.status(200).json({msg:"deleted"})
         }else{
             throw ErrorHandler.BadRequest
         }
     }catch(err:any){
       
         res.status(500).json({msg:err.message})
     }
 })



 export default router

 
