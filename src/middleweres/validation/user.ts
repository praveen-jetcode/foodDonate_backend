import { check,validationResult } from "express-validator";

export const userValidation = [
    check('name').trim().not().isEmpty().withMessage("enter the name"),
    check("email").normalizeEmail().isEmail().withMessage("Enter the Proper Email!"),
    check('password').trim().not().isEmpty().withMessage("enter the password"),
    check('phoneNo').trim().not().isEmpty().withMessage("enter the phoneNo"),
    check('address').trim().not().isEmpty().withMessage("enter the address"),
   
]


export const validationUser = (req:any, res:any, next:any) => {
    const result = validationResult(req).array();
    if (!result.length) return next();
  
    const error = result[0].msg;
  
    res.json({ success: false, message: error });
  };

 