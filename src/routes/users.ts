import { Router } from "express";
import USER from "../models/user";
import ErrorHandler from "../config/errorHandler";
var bcrypt = require("bcryptjs");
import { tokenGenerate } from "../auth/jwtToken";
import { userValidation, validationUser } from "../middleweres/validation/user";
import { ResultWithContext } from "express-validator/src/chain";
import { getDistance } from 'geolib';
const router = Router();



router.post(
  "/signup",
  userValidation,
  validationUser,
  async (req: any, res: any) => {
    try {
      const email = await USER.findOne({ email: req.body.email });
      if (email) {
        res.status(400).json({ msg: "email already exit" });
      }
      const hash = await bcrypt.hash(req.body.password, 10);
      req.body.password = hash;
      const user = new USER({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phoneNo: req.body.phoneNo,
        address: req.body.address,
        foodId:req.body.foodId,
        location:req.body.location
      });
      if (user) {
        await user.save();
        // const token = tokenGenerate(user);
        res.status(200).json({
          msg: "success",
          user,
        //   token,
        });
      } else {
        throw ErrorHandler.BadRequest;
      }
    } catch (err:any) {
      
      res.status(500).json({msg:err.message})
    }
  }
);

// router.post('/location',async (req,res)=>{
//   USER.find(
//     { loc :
//     {  near :
//         { $geometry :
//           { type : "Point" ,
//             coordinates : [ req.body.long,req.body.lat]
//    },
//     $maxDistance: 5000
//    } } }
//   ).exec((err,location)=>{
//   if(err){
//    return res.status(500).json({
//     status:false,
//     data:err
//    })
//   }
//   if(location){
//     console.log(location)
//     return res.status(200).json({
//      status:true,
//      data:location
//     })
//    }
//   })
// })

// router.get('/location-find',async (req,res)=>{
//      const distance= getDistance(
//       {latitude:11.7480,longitude:79.7714},
//       {latitude:11.7768,longitude: 79.6703}
//      )
//      console.log(distance/1000,"distance")
//     })


router.post("/signin", async (req, res) => {
  try {
    const user = await USER.findOne({ email: req.body.email });
    console.log(user);
    if (!user) {
      res.send("No Email find");
    } else {
      const checkUser = await bcrypt.compare(req.body.password, user.password);
      if (!checkUser) {
        res.send("Password invalid");
      } else {
        const token = tokenGenerate(user);
       
        res.status(200).json({ msg: "success",token });
        
      }
    }
  } catch (err:any) {
 
    res.status(500).json({msg:err.message})
  }
});

router.get("/", async (req, res) => {
  const { page = 1, limit = 10 }: any = req.query;
  try {
    let data = await USER.find().populate("foodId")
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    let totalCount = await USER.countDocuments();
    if (data) {
      res.status(200).json({
        data,
        totalPages: Math.ceil(totalCount / limit),
        currentPage: page,
        count: totalCount,
      });
    } else {
      throw ErrorHandler.BadRequest;
    }
  } catch (err:any) {
   
    res.status(500).json({msg:err.message})
  }
});

router.get("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    if (!id) {
      return res.status(400).json({
        message: "invalid id",
      });
    }
    let data = await USER.findById(id);
    if (data) {
      res.status(200).json(data);
    } else {
      throw ErrorHandler.NotFound;
    }
  } catch (err:any) {
   
    res.status(500).json({msg:err.message})
  }
});

router.put("/:id", async (req, res) => {
  let id = req.params.id;
  let body = req.body;
  try {
    let data = await USER.findByIdAndUpdate(id, body, { new: true });
    if (data) {
      res.status(200).json(data);
    } else {
      throw ErrorHandler.BadRequest;
    }
  } catch (err:any) {
    res.status(500).json({msg:err.message})
  }
});

router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  let body = req.body;
  try {
    let data = await USER.findByIdAndDelete(id, body);
    if (data) {
      res.status(200).json({msg:"Deleted"});
    } else {
      throw ErrorHandler.BadRequest;
    }
  } catch (err:any) {
  
    res.status(500).json({msg:err.message})
  }
});

export default router;


